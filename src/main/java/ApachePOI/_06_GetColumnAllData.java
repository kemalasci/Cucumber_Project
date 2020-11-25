package ApachePOI;

import org.apache.poi.ss.usermodel.*;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _06_GetColumnAllData {


    public static void main(String[] args) {

        System.out.print("Column No=");
        Scanner oku=new Scanner(System.in);
        int colNo=oku.nextInt();

        List<String> donenList=getColumnList(colNo);
        System.out.println(donenList);
    }

    public static List<String> getColumnList(int colNo)
    {
        List<String> listCol =new ArrayList<>();

        String path="src/main/resources/LoginData.xlsx";
        Workbook workbook=null;
        try {
            FileInputStream inputStream = new FileInputStream(path);
            workbook = WorkbookFactory.create(inputStream);
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }

        Sheet sheet= workbook.getSheet("Login");

        int rowCount= sheet.getPhysicalNumberOfRows();

        for(int i=0;i< rowCount ;i++) {
            Row row= sheet.getRow(i);

            int cellCount=row.getPhysicalNumberOfCells();


            if (cellCount > colNo) {
                Cell cell = row.getCell(colNo);
                listCol.add(cell.toString());
            }
        }
        return listCol;
    }

}
