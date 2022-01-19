package com.example.springproject.controller;

import com.example.springproject.domain.Data;
import com.example.springproject.domain.FileData;
import com.example.springproject.service.InfoService;
import com.example.springproject.service.InfoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;


@RestController("")
public class FileDataController {

    InfoServiceImpl infoServiceImpl =  new InfoServiceImpl();

    @GetMapping("/hello")
    public String hello(){
        return "Hello world";
    }

    @GetMapping("/lab")
    public String lab(){
        return "lab6";
    }

    @GetMapping("/getAllFileData")
    public ArrayList<FileData> getAllFileData() {
        infoServiceImpl.setType("FileData");
        ArrayList<FileData> arrayList = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            arrayList.add((FileData) infoServiceImpl.queryAll().get(i));
        }
        return arrayList;
    }

    @GetMapping("/searchFileData")
    public ArrayList<Data> searchFileData(@RequestParam(value = "columnName")String columnName, @RequestParam(value = "value")String value){
        infoServiceImpl.setType("FileData");
        return infoServiceImpl.search(columnName, value);
    }

    @GetMapping("/getTotalNum")
    public String getTotalNum(){
        infoServiceImpl.setType("FileData");
        return String.valueOf(infoServiceImpl.queryAll().size());
    }

    @GetMapping("showLastOne")
    public ArrayList<Data> showLastOne(){
        infoServiceImpl.setType("FileData");
        return infoServiceImpl.getLastOneByLocation();
    }

    @GetMapping("sort")
    public ArrayList<Data> sort(@RequestParam(value = "columnName")String columnName, @RequestParam(value = "upOrDown")String upOrDown){
        return infoServiceImpl.sort(infoServiceImpl.dataList, columnName, upOrDown);
    }

    @GetMapping("saveText")
    public void saveText(){
        infoServiceImpl.save();
    }
}
