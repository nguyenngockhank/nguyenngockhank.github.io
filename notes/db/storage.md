# Storage 

![compare](https://usdc.vn/wp-content/uploads/2020/04/object-vs-traditional.png)


**Object**| **File**| **Block**| **Archive**
----------| --------| ---------| ------------
**Object Storage**| **NAS** | **SAN**| **“Tape”**
Videos, photos serving streaming |  All kinds of file | Attach to server |  The file needs to be saved permanently
Read (download) data regularly |  Read data regularly, install as a network drive |  Run data directly on Storage |  Rarely to download
High upload / download speed |  High upload / download speed |  Very High upload / download speed |  High upload speed, slow download
Use with CDN |  Many usage scenarios |  Use with server (VM) |  Use independently


Criteria | Block | File | Object  
---------| ---------| ------ | -----
Mutable Content | ✅  | ✅  | ❌ (support object versioning)
Cost | High  | Medium => High  | Low
Perf | Medium to High, very high  | Medium => High  | Low => Medium
Consistency | Strong  | Strong  | Strong
Data access | SAS / iSCSI / FC  | Standard file access CIFS/SMB & NFS | Restful API
Scalability  | Medium  | High | Vast 
Good for | VM, high-perf app (eg: DB) | General-purpose | Binary data, unstructured data 



## Object storage
Object storage or object-oriented storage, as the name implies, is a form of data storage in separate units (objects). Objects are stored inside a single repository, and will not be aggregated into files within a directory located within other directories.

Object-oriented storage uses logical frames to contain Objects in a peer-to-peer fashion. Each object will include its own data, meta data and identifier id.

To better understand object storage, we can learn more about two traditional types of storage: file storage and block storage.

### Erasure coding

A really cool technique that’s commonly used in object storage such as S3 to improve durability is called **Erasure coding**.

Erasure coding deals with data durability differently from replication. It chunks data into smaller pieces (placed on different servers) and
creates parities for redundancy. In the event of failures, we can use chunk data and parities to reconstruct the data. 

![Erasure Coding](https://stonefly.com/wp-content/uploads/2018/05/erasure-2.png)

- Pros: use less storage 
- Cons: use much CPU

Read more:
- [Scalar Erasure – Xóa mã vô hướng với Erasure Coding Pivot3](https://vietnetco.vn/scalar-erasure-xoa-ma-vo-huong-voi-erasure-coding-pivot3/2226.html)
- [Erasure Coding 101](https://blog.min.io/erasure-coding/)

## File storage
File storage stores data as a single piece of information inside a folder to help organize that data with other data. This method, also known as hierarchical storage or a directory tree, simulates the way we still store paper files. When data access is needed, the computer system only needs to specify the path to search for that data.

## Block storage
Block storage divides a file into separate data blocks and then stores these blocks as separate data pieces. The storage system can do this without having a file directory structure because each data block has a unique address. This allows the storage system to disperse smaller blocks of data anywhere in the system that it finds most effective. The system software stores the necessary blocks together to assemble into a file whenever the file is accessed.