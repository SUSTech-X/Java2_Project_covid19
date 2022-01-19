package com.example.springproject.service;

import com.example.springproject.domain.Data;
import com.example.springproject.domain.FileData;

import java.io.*;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import com.example.springproject.domain.OutBreakData;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
public class InfoServiceImpl implements InfoService{
    final private static String url = "https://covid19.who.int/table";
    final private static String outbreakUrl = "https://www.outbreak.my/zh/world";
    final private static String baiduUrl="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner#tab4";
    public boolean hasInitFile;
    public String type;
    public ArrayList<Data> fileDataList;
    public ArrayList<Data> dataList;
    public final static String path="owid-covid-data.csv";
    public InfoServiceImpl(){
        fileDataList=new ArrayList<>();
        int i,j,k;
        try {
            BufferedReader reader=new BufferedReader(new FileReader(path));

            reader.readLine();
            reader.lines().parallel().forEach(str->{
                String[] sp=str.split(",",-1);
                FileData data=new FileData();
                try{
                    Field[] fields=FileData.class.getDeclaredFields();
                    for(Field field:fields){
                        field.setAccessible(true);
                    }
                    int l=fields.length;
                    for(int inner=0;inner<l;inner++){
                        fields[inner].set(data,normalizeString(sp[inner].equals("")?"/":sp[inner]));
                    }
                    synchronized (fileDataList){
                        fileDataList.add(data);
                    }

                }catch (Exception e){
                    System.out.println(sp.length);
                }
            });
            Field[] fields=FileData.class.getDeclaredFields();
            for(Field field:fields){
                field.setAccessible(true);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // type is FileData,WhoData or OutBreakData
    @Override
    public void setType(String type) {
        this.type=type;
        if(type.equals("FileData")){
            dataList = fileDataList;
        }else if(type.equals("OutBreakData")){
            dataList=new ArrayList<>();
            Document doc = null;
            try {
                doc = Jsoup.connect(outbreakUrl).get();
            } catch (IOException e) {
                e.printStackTrace();
            }
            Elements list = doc.select("#world_stats > tbody");
            list = list.select("tbody").select("tr");
            for (int i = 0; i < list.size(); i++) {
                OutBreakData data=new OutBreakData();
                data.countryName=normalizeString(list.get(i).select("td").get(0).text());
                data.cumulativeConfirmed=normalizeString(list.get(i).select("td").get(1).text().split(" ")[0]);
                data.dieNum=normalizeString(list.get(i).select("td").get(3).text().split(" ")[0]);
                data.cureNum=normalizeString(list.get(i).select("td").get(5).text().split(" ")[0]);
                data.existConfirmed=normalizeString(list.get(i).select("td").get(7).text().split(" ")[0]);
                data.diePercentage=normalizeString(list.get(i).select("td").get(8).text().split(" ")[0]);
                data.recoverPercentage=normalizeString(list.get(i).select("td").get(9).text().split(" ")[0]);
                dataList.add(data);
            }
        }else if(type.equals("BaiduData")){

        }
    }

    public ArrayList<Data> queryAll(){
        if(type.equals("FileData")){
            return fileDataList;
        }
        return dataList;
    }

    @Override
    public ArrayList<Data> search(String columnName, String value) {
        Field[] fields=dataList.get(0).getClass().getDeclaredFields();
        Field field=null;
        for(Field f:fields){
            if(f.getName().equals(columnName)){
                field=f;
            }
        }
        ArrayList<Data> list=new ArrayList<>();
        if(field==null)return list;
        field.setAccessible(true);
        Field finalField = field;
        dataList.forEach(data -> {
            try {
                if(finalField.get(data).equals(value)){
                    synchronized (list){
                        list.add(data);
                    }
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        });
        dataList = list;
        return list;
    }


    @Override
    public ArrayList<Data> sort(String columnName,String upOrDown) {
        return sort(dataList,columnName,upOrDown);
    }

    public static int compare(String sa,String sb){
        if(Character.isDigit(sa.charAt(0))){
            if(sa.contains("-")){
                String[] arrayA=sa.split("-"),arrayB=sb.split("-");
                for(int i=0;i<arrayA.length;i++){
                    if(Integer.parseInt(arrayA[i])!=Integer.parseInt(arrayB[i])){
                        return Integer.compare(Integer.parseInt(arrayA[i]),Integer.parseInt(arrayB[i]));
                    }
                }
                return 0;
            }else{
                StringBuilder actualA=new StringBuilder(),actualB=new StringBuilder();
                for(int i=0;i<sa.length();i++){
                    if(Character.isDigit(sa.charAt(i))||(sa.charAt(i)=='.')){
                        actualA.append(sa.charAt(i));
                    }
                }
                for(int i=0;i<sb.length();i++){
                    if(Character.isDigit(sb.charAt(i))||(sb.charAt(i)=='.')){
                        actualB.append(sb.charAt(i));
                    }
                }
                return Double.compare(Double.parseDouble(actualA.toString()),Double.parseDouble(actualB.toString()));
            }
        }else{
            return sa.compareTo(sb);
        }
    }
    @Override
    public ArrayList<Data> sort(ArrayList<Data> list, String columnName, String upOrDown) {
        ArrayList<Data> ans=new ArrayList<>();
        Field[] fields=list.get(0).getClass().getDeclaredFields();
        Field field=null;
        for(Field f:fields){
            if(f.getName().equals(columnName)){
                field=f;
            }
        }
        if(field==null){
            return ans;
        }
        int sz=list.size();
        ArrayList<Data> empty=new ArrayList<>();
        ArrayList<Data> entity=new ArrayList<>();
        for(int i=0;i<sz;i++){
            Data here=list.get(i);
            try {
                if(field.get(here).equals("/")){
                    empty.add(here);
                }else{
                    entity.add(here);
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        if(upOrDown.equals("up")){
            Field finalField = field;
            entity.sort((a, b)->{
                try {
                    String name=finalField.getName();
                    String sa=(String) finalField.get(a);
                    String sb=(String) finalField.get(b);
                    return compare(sa,sb);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
                return 0;
            });
        }else{
            Field finalField = field;
            entity.sort((a, b)->{
                try {
                    String sa=(String) finalField.get(a);
                    String sb=(String) finalField.get(b);
                    return -compare(sa,sb);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
                return 0;
            });
        }
        entity.addAll(empty);

        return entity;
    }

    @Override
    public ArrayList<Data> search(ArrayList<Data> list, String columnName, String value) {
        ArrayList<Data> ans=new ArrayList<>();
        int sz=list.size();
        Field[] fields=list.get(0).getClass().getDeclaredFields();
        Field field=null;
        for(Field f:fields){
            if(f.getName().equals(columnName)){
                field=f;
            }
        }
        if(field==null){
            return ans;
        }
        for(int i=0;i<sz;i++){
            try{
                if(field.get(list.get(i)).equals(value)){
                    ans.add(list.get(i));
                }
            }catch (Exception e){

            }
        }
        dataList = ans;
        return ans;
    }

    @Override
    public void save() {
        try {
            Calendar calendar = Calendar.getInstance(); // get current instance of the calendar
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss");
//            System.out.println(formatter.format(calendar.getTime()));
            PrintWriter writer=new PrintWriter(new OutputStreamWriter(new FileOutputStream(formatter.format(calendar.getTime())+".csv")));
            Field[] fs=dataList.get(0).getClass().getDeclaredFields();
            int l=fs.length;
            StringBuilder sb=new StringBuilder();
            for(int i=0;i<l;i++){
                sb.append(fs[i].getName());
                if(i!=l-1){
                    sb.append(",");
                }
            }
            writer.println(sb);
            dataList.forEach(data -> {
                StringBuilder builder=new StringBuilder();
                Field[] fields=dataList.get(0).getClass().getDeclaredFields();
                try {
                    int sz=fields.length;
                    for(int i=0;i<sz;i++){
                        builder.append(fields[i].get(data));
                        if(i!=sz-1){
                            builder.append(",");
                        }
                    }
                    synchronized (dataList){
                        writer.println(builder);
                    }
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            });
            writer.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void save(String filePath, ArrayList<Data> list) {
        try {
            PrintWriter writer=new PrintWriter(new OutputStreamWriter(new FileOutputStream(filePath)));
            Field[] fs=list.get(0).getClass().getDeclaredFields();
            int l=fs.length;
            StringBuilder sb=new StringBuilder();
            for(int i=0;i<l;i++){
                sb.append(fs[i].getName());
                if(i!=l-1){
                    sb.append(",");
                }
            }
            writer.println(sb);
            list.forEach(data -> {
                StringBuilder builder=new StringBuilder();
                Field[] fields=list.get(0).getClass().getDeclaredFields();
                try {
                    int sz=fields.length;
                    for(int i=0;i<sz;i++){
                        builder.append(fields[i].get(data));
                        if(i!=sz-1){
                            builder.append(",");
                        }
                    }
                    synchronized (list){
                        writer.println(builder);
                    }
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            });
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    public ArrayList<Data> getLastOneByLocation() {
        ArrayList<Data> ans=new ArrayList<>();
        try {
            Field field=FileData.class.getDeclaredField("location");
            Map<String,List<Data>> map=dataList.stream().collect(Collectors.groupingBy(data -> {
                try {
                    return (String) field.get(data);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
                return "";
            }));
            map.values().forEach(l->{
                l.sort((a,b)-> -((FileData)a).date.compareTo(((FileData)b).date));
                ans.add(l.get(0));
            });

        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        }
        dataList = ans;
        return ans;
    }

    @Override
    public String[] getRandomHex() {
        Random random=new Random();
        String[] strings=new String[250];
        char[] randomRange=new char[]{'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e'};
        for(int i=0;i<strings.length;i++){
            strings[i]="#";
            for(int j=0;j<6;j++){
                strings[i]+=randomRange[random.nextInt(15)];
            }
        }
        return strings;
    }

    @Override
    public ArrayList<ArrayList<String>> getOnOneMonth(LocalDate date) {
        ArrayList<ArrayList<String>> ans=new ArrayList<>();
        fileDataList.forEach((data -> {
            FileData fileData=(FileData) data;
            LocalDate here=LocalDate.parse(fileData.date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            if(here.getYear()==date.getYear()&&here.getMonth()==date.getMonth()){
                ArrayList<String> a=new ArrayList<>();
                a.add(fileData.total_cases);
                a.add(fileData.new_cases);
                a.add(fileData.total_deaths);
                a.add(fileData.new_deaths);
                a.add(fileData.location);
                a.add(Integer.toString(here.getDayOfMonth()));
                ans.add(a);
            }
        }));
        return ans;
    }

    static String normalizeString(String a){
        if(a.startsWith("-")){
            return "0";
        }else{
            return a;
        }
    }
}
