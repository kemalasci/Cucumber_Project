package ApachePOI;

import org.apache.poi.ss.usermodel.*;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class _04_ApachePOIGetAllData {
    public static void main(String[] args) throws IOException {

        String path="src/main/resources/ApacheExcel1.xlsx";
        FileInputStream inputStream= new FileInputStream(path);
        Workbook workbook= WorkbookFactory.create(inputStream);
        Sheet sheet= workbook.getSheet("Sheet1");


        int rowCount= sheet.getPhysicalNumberOfRows();
        System.out.println("Satir Sayırıs="+rowCount);

        for(int i=0;i<rowCount ;i++)
        {
            Row row=sheet.getRow(i);
            int cellCount = row.getPhysicalNumberOfCells();


            for(int j=0;j< cellCount;j++ )
            {
                Cell cell = row.getCell(j);

                System.out.printf("%-15s", cell);
            }
            System.out.println();
        }
    }
}
