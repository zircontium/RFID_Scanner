# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

For starting the Frontend, you can run:

### `npm start`

# Getting Started with Application Structure

The reader is a device that has one or more antennas that emit radio waves and receive signals back from the RFID tag.

In this application we have a RFID Reader (Hardware) that is connected to our local network at 135.7.47.28 and has a port 6000.

We have a basic device driver from there we can configure the device settings, change network settings and also we can read the tags. But the limitation was we can only read the tags one by one and we cant get the other details from the tag itself or store the data in DB.

so we recreated the software modified it.

# Application Structure

The application is divided into 2 parts

## Frontend

Build using ReactJS

In this we have a UI where we have 1. Dashboard 2. Connect Device & add multiple device 3. Search by tag from DB 4. Connected Device List

1. Dashboard - It contains Date time , Connected Devices , Vehicle IN , Vehicle OUT Count.

![image](https://user-images.githubusercontent.com/83773953/233830401-acc3499b-2f06-44b1-9ad2-c187ac392a03.png)

2. Connect Device - interface that allows us to add device and connect to the device. We can add multiple devices and connect to them simultaneously.

![image](https://user-images.githubusercontent.com/83773953/233830938-53acd3c7-7810-4778-8eb3-9791d7cec229.png)

3. Search by tag - We can search the tag from the DB and get the details.

![image](https://user-images.githubusercontent.com/83773953/233830959-40df10b4-890d-43ae-b311-3b1ad10ac3ac.png)

4. Connected Device List - We can see the list of connected devices and we can Stop the device with id.

![image](https://user-images.githubusercontent.com/83773953/233830993-3f1c4a27-4d9a-4a38-98a6-6bccf3dfbc1a.png)

## Backend

Build using JAVA Spring Boot

The base SDK is JAVA core based software which we integrated with PosgreSQL DB.The software allows us to read the tags then from the id we are fetching the vehicle details from open API

```
"https://myfastagnation.in/MTMSPG/GetTagDetails?SearchType=TagId&SearchValue="
```

We are storing 1. TAG ID 2. VRN 3. TIME STAMP 4. STATE (IN OR OUT) 5. REMARKS if any, in DB.

## Table structure

```sql
-- Table: public.response_table

-- DROP TABLE IF EXISTS public.response_table;

CREATE TABLE IF NOT EXISTS public.response_table
(
tag_id character varying(100) COLLATE pg_catalog."default",
vrn character varying(100) COLLATE pg_catalog."default",
date_time timestamp without time zone,
state character varying(100) COLLATE pg_catalog."default",
remarks character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.response_table
OWNER to postgres;
```
## DB Function in JAVA
```java
package uhf18win;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DbFunctions {
    public Connection connect_to_db(String dbname,String user,String pass){
        Connection conn=null;
        try{
            Class.forName("org.postgresql.Driver");
            conn= DriverManager.getConnection("jdbc:postgresql://localhost:5432a/"+dbname,user,pass);
            if(conn!=null){
                System.out.println("Connection Established");
            }
            else{
                System.out.println("Connection Failed");
            }

        }catch (Exception e){
            System.out.println(e);
        }
        return conn;
    }

    public void insert_row(Connection conn,String table_name,String Tag_ID, String VRN, String Date_Time){
        Statement statement;
        try {
            String query=String.format("insert into %s(Tag_ID,VRN,Date_Time) values('%s','%s','%s');",table_name,Tag_ID,VRN,Date_Time);
            statement=conn.createStatement();
            statement.executeUpdate(query);
            System.out.println("Row Inserted");
        }catch (Exception e){
            System.out.println(e);
        }
    }
}

```
## In Backend we have 5 API's so far to perform the operations,

1. Each and every time we add device it creates a separate ID. This ID is crucial for operating respected device instance. We used multi threading where we can add multiple devices and run them simultaneously. The devices are running with its own thread and individual ID. For connection to Stopping the respected instance we need that id.
   no need to worry we already integrated with it with the apis.

2. Rest 4 apis are to trigger operations from the frontend,
   a. Open b. Close c. Start d. Stop.

### ID Generate

```java
@CrossOrigin
    @RequestMapping(value="/addReader", method = RequestMethod.POST)
    ResponseEntity addReader() {
        final int instaceId = uhfService.createMainFrameInstance();
        return new ResponseEntity(instaceId, HttpStatus.CREATED);
    }

```

### Open TCP

```java
    @CrossOrigin
    @RequestMapping(value="/openTCP", method = RequestMethod.POST)
    ResponseEntity openTCP(@RequestParam("id") String id,
                           @RequestParam("ip") String ip,
                           @RequestParam("port") int port) {
        if (uhfService.openTCP(Integer.parseInt(id), ip, port)) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }

```

### Close TCP

```java
    @CrossOrigin
    @RequestMapping(value="/closeTCP", method = RequestMethod.POST)
    ResponseEntity closeTCP(@RequestParam("id") String id) {
        if (uhfService.closeTCP(Integer.parseInt(id))) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }

```
### Start Device

```java
    @CrossOrigin
    @RequestMapping(value="/startTCP", method = RequestMethod.POST)
    ResponseEntity startTCP(@RequestParam("id") String id) {
        if (uhfService.startTCP(Integer.parseInt(id))) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }
```

### Stop Device
```java
    @CrossOrigin
    @RequestMapping(value="/stopTCP", method = RequestMethod.POST)
    ResponseEntity stopTCP(@RequestParam("id") String id) {
        if (uhfService.stopTCP(Integer.parseInt(id))) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }
    
```