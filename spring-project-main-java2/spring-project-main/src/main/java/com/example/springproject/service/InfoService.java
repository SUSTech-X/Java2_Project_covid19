package com.example.springproject.service;

import com.example.springproject.domain.Data;

import java.util.ArrayList;
import java.util.Comparator;
//import java.util.Date;

public interface InfoService {
    public void setType(String type);
    public ArrayList<Data> queryAll();
    public ArrayList<Data> search(String columnName,String value);
    public ArrayList<Data> sort(String columnName, String upOrDown);
    public ArrayList<Data> sort(ArrayList<Data> list,String columnName, String upOrDown);// up:from small to big
    public ArrayList<Data> search(ArrayList<Data> list,String columnName,String value);
    public void save();
    public void save(String filePath,ArrayList<Data> list);
    public ArrayList<Data> getLastOneByLocation();
    public String[] getRandomHex();
//    public ArrayList<Data>
}
