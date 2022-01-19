package com.example.springproject.controller;

import com.example.springproject.domain.Data;
import com.example.springproject.domain.FileData;
import com.example.springproject.domain.OutBreakData;
import com.example.springproject.service.InfoServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController("")
public class OutBreakDataController {

    InfoServiceImpl infoServiceImpl =  new InfoServiceImpl();


    @GetMapping("/getAllOutBreakData")
    public ArrayList<OutBreakData> getAllFileData() {
        infoServiceImpl.setType("OutBreakData");
        ArrayList<OutBreakData> arrayList = new ArrayList<>();
        for (int i = 0; i < 205; i++) {
            arrayList.add((OutBreakData) infoServiceImpl.queryAll().get(i));
        }
        return arrayList;
    }

    @GetMapping("/searchOutBreakData")
    public ArrayList<Data> searchFileData(@RequestParam(value = "columnName")String columnName, @RequestParam(value = "value")String value){
        infoServiceImpl.setType("OutBreakData");
        return infoServiceImpl.search(columnName, value);
    }

    @GetMapping("/getTotalNumOutBreakData")
    public String getTotalNum(){
        infoServiceImpl.setType("OutBreakData");
        return String.valueOf(infoServiceImpl.queryAll().size());
    }

    @GetMapping("showLastOneOutBreakData")
    public ArrayList<Data> showLastOne(){
        infoServiceImpl.setType("OutBreakData");
        return infoServiceImpl.dataList;
    }

    @GetMapping("sortOutBreakData")
    public ArrayList<Data> sort(@RequestParam(value = "columnName")String columnName, @RequestParam(value = "upOrDown")String upOrDown){
        return infoServiceImpl.sort(infoServiceImpl.dataList, columnName, upOrDown);
    }

    @GetMapping("saveTextOutBreakData")
    public void saveText(){
        infoServiceImpl.save();
    }
}
