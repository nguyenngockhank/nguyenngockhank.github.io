(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1630:function(e,t,a){"use strict";a.r(t);var s=a(7),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"design-google-drive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-google-drive"}},[e._v("#")]),e._v(" Design Google Drive")]),e._v(" "),s("p",[e._v("In recent years, cloud storage services such as Google Drive, Dropbox, Microsoft OneDrive, and Apple iCloud have become very popular. In this chapter, you are asked to design Google Drive.")]),e._v(" "),s("p",[e._v("Let us take a moment to understand Google Drive before jumping into the design. Google Drive is a file storage and synchronization service that helps you store documents, photos, videos, and other files in the cloud. You can access your files from any computer, smartphone, and tablet. You can easily share those files with friends, family, and coworkers.")]),e._v(" "),s("h2",{attrs:{id:"step-1-understand-the-problem-and-establish-design-scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-understand-the-problem-and-establish-design-scope"}},[e._v("#")]),e._v(" Step 1 - Understand the problem and establish design scope")]),e._v(" "),s("p",[e._v("Designing a Google drive is a big project, so it is important to ask questions to narrow down the scope.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": What are the most important features?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": Upload and download files, file sync, and notifications.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": Is this a mobile app, a web app, or both?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": Both.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": What are the supported file formats?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": Any file type.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": Do files need to be encrypted?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": Yes, files in the storage must be encrypted.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": Is there a file size limit?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": Yes, files must be 10 GB or smaller.")]),e._v(" "),s("p",[s("strong",[e._v("Candidate")]),e._v(": How many users does the product have?"),s("br"),e._v(" "),s("strong",[e._v("Interviewer")]),e._v(": 10M DAU.")]),e._v(" "),s("p",[e._v("we focus on the following features:")]),e._v(" "),s("ul",[s("li",[e._v("Add files. The easiest way to add a file is to drag and drop a file into Google drive.")]),e._v(" "),s("li",[e._v("Download files.")]),e._v(" "),s("li",[e._v("Sync files across multiple devices. When a file is added to one device, it is automatically synced to other devices.")]),e._v(" "),s("li",[e._v("See file revisions.")]),e._v(" "),s("li",[e._v("Share files with your friends, family, and coworkers")]),e._v(" "),s("li",[e._v("Send a notification when a file is edited, deleted, or shared with you.")])]),e._v(" "),s("p",[e._v("Features not discussed in this chapter include:")]),e._v(" "),s("ul",[s("li",[e._v("Google doc editing and collaboration. Google doc allows multiple people to edit the same document simultaneously. This is out of our design scope.\nOther than clarifying requirements, it is important to understand non-functional requirements:")]),e._v(" "),s("li",[e._v("Reliability. Reliability is extremely important for a storage system. Data loss is unacceptable.")]),e._v(" "),s("li",[e._v("Fast sync speed. If file sync takes too much time, users will become impatient and abandon the product.")]),e._v(" "),s("li",[e._v("Bandwidth usage. If a product takes a lot of unnecessary network bandwidth, users will be unhappy, especially when they are on a mobile data plan.")]),e._v(" "),s("li",[e._v("Scalability. The system should be able to handle high volumes of traffic.")]),e._v(" "),s("li",[e._v("High availability. Users should still be able to use the system when some servers are offline, slowed down, or have unexpected network errors.")])]),e._v(" "),s("h3",{attrs:{id:"back-of-the-envelope-estimation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-of-the-envelope-estimation"}},[e._v("#")]),e._v(" Back of the envelope estimation")]),e._v(" "),s("ul",[s("li",[e._v("Assume the application has 50 million signed up users and 10 million DAU.")]),e._v(" "),s("li",[e._v("Users get 10 GB free space.")]),e._v(" "),s("li",[e._v("Assume users upload 2 files per day. The average file size is 500 KB.")]),e._v(" "),s("li",[e._v("1:1 read to write ratio.")]),e._v(" "),s("li",[e._v("Total space allocated: 50 million * 10 GB = 500 Petabyte")]),e._v(" "),s("li",[e._v("QPS for upload API: 10 million * 2 uploads / 24 hours / 3600 seconds = ~ 240")]),e._v(" "),s("li",[e._v("Peak QPS = QPS * 2 = 480")])]),e._v(" "),s("h2",{attrs:{id:"step-2-propose-high-level-design-and-get-buy-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-propose-high-level-design-and-get-buy-in"}},[e._v("#")]),e._v(" Step 2 - Propose high-level design and get buy-in")]),e._v(" "),s("p",[e._v("Instead of showing the high-level design diagram from the beginning, we will use a slightly different approach. We will start with something simple: build everything in a single server.")]),e._v(" "),s("p",[e._v("Then, gradually scale it up to support millions of users. By doing this exercise, it will refresh your memory about some important topics covered in the book.")]),e._v(" "),s("p",[e._v("Let us start with a single server setup as listed below:")]),e._v(" "),s("ul",[s("li",[e._v("A web server to upload and download files.")]),e._v(" "),s("li",[e._v("A database to keep track of metadata like user data, login info, files info, etc.")]),e._v(" "),s("li",[e._v("A storage system to store files. We allocate 1TB of storage space to store files.")])]),e._v(" "),s("p",[e._v("We spend a few hours setting up an Apache web server, a MySql database, and a directory called "),s("code",[e._v("drive/")]),e._v(" as the root directory to store uploaded files. Under "),s("code",[e._v("drive/")]),e._v(" directory, there is a list of directories, known as namespaces. Each namespace contains all the uploaded files for that user. The filename on the server is kept the same as the original file name. Each file or folder can be uniquely identified by joining the namespace and the relative path.")]),e._v(" "),s("p",[e._v("Figure below shows an example of how the "),s("code",[e._v("/drive")]),e._v(" directory looks like on the left side and its expanded view on the right side.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(867),alt:"image"}})]),e._v(" "),s("h3",{attrs:{id:"apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apis"}},[e._v("#")]),e._v(" APIs")]),e._v(" "),s("p",[e._v("What do the APIs look like? We primary need 3 APIs: upload a file, download a file, and get file revisions.")]),e._v(" "),s("h4",{attrs:{id:"_1-upload-a-file-to-google-drive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-upload-a-file-to-google-drive"}},[e._v("#")]),e._v(" 1. Upload a file to Google Drive")]),e._v(" "),s("p",[e._v("Two types of uploads are supported:")]),e._v(" "),s("ul",[s("li",[e._v("Simple upload. Use this upload type when the file size is small.")]),e._v(" "),s("li",[e._v("Resumable upload. Use this upload type when the file size is large and there is high chance of network interruption.")])]),e._v(" "),s("p",[e._v("Here is an example of resumable upload API:")]),e._v(" "),s("p",[s("code",[e._v("https://api.example.com/files/upload?uploadType=resumable")])]),e._v(" "),s("p",[s("strong",[e._v("Params")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("uploadType=resumable")]),e._v(" "),s("li",[e._v("data: Local file to be uploaded.")])]),e._v(" "),s("p",[e._v("A resumable upload is achieved by the following 3 steps:")]),e._v(" "),s("ul",[s("li",[e._v("Send the initial request to retrieve the resumable URL.")]),e._v(" "),s("li",[e._v("Upload the data and monitor upload state.")]),e._v(" "),s("li",[e._v("If upload is disturbed, resume the upload.")])]),e._v(" "),s("h4",{attrs:{id:"_2-download-a-file-from-google-drive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-download-a-file-from-google-drive"}},[e._v("#")]),e._v(" 2. Download a file from Google Drive")]),e._v(" "),s("p",[e._v("Example API: "),s("code",[e._v("https://api.example.com/files/download")])]),e._v(" "),s("p",[s("strong",[e._v("Params")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("path: download file path.")])]),e._v(" "),s("p",[s("strong",[e._v("Example params")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/recipes/soup/best_soup.txt"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"_3-get-file-revisions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-get-file-revisions"}},[e._v("#")]),e._v(" 3. Get file revisions")]),e._v(" "),s("p",[e._v("Example API: "),s("code",[e._v("https://api.example.com/files/list_revisions")])]),e._v(" "),s("p",[s("strong",[e._v("Params")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("path: The path to the file you want to get the revision history.")]),e._v(" "),s("li",[e._v("limit: The maximum number of revisions to return.")])]),e._v(" "),s("p",[s("strong",[e._v("Example params")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/recipes/soup/best_soup.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("All the APIs require user authentication and use HTTPS. Secure Sockets Layer (SSL) protects data transfer between the client and backend servers.")]),e._v(" "),s("h3",{attrs:{id:"move-away-from-single-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#move-away-from-single-server"}},[e._v("#")]),e._v(" Move away from single server")]),e._v(" "),s("p",[e._v("As more files are uploaded, eventually you get the space full alert as shown in Figure below")]),e._v(" "),s("p",[s("img",{attrs:{src:a(868),alt:"iamge"}})]),e._v(" "),s("p",[e._v("Only 10 MB of storage space is left! This is an emergency as users cannot upload files anymore. The first solution comes to mind is to shard the data, so it is stored on multiple storage servers. Figure below shows an example of sharding based on "),s("em",[e._v("user_id")]),e._v(" .")]),e._v(" "),s("p",[s("img",{attrs:{src:a(869),alt:"img"}})]),e._v(" "),s("p",[e._v("You pull an all-nighter to set up database sharding and monitor it closely. Everything works smoothly again. You have stopped the fire, but you are still worried about potential data losses in case of storage server outage. You ask around and your backend guru friend Frank told you that many leading companies like Netflix and Airbnb use Amazon S3 for storage.")]),e._v(" "),s("p",[e._v("“Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance” [3]. You decide to do some research to see if it is a good fit.")]),e._v(" "),s("p",[e._v("After a lot of reading, you gain a good understanding of the S3 storage system and decide to store files in S3. Amazon S3 supports same-region and cross-region replication. A region is a geographic area where Amazon web services (AWS) have data centers. As shown in Figure below, data can be replicated on the same-region (left side) and cross-region (right side).")]),e._v(" "),s("p",[e._v("Redundant files are stored in multiple regions to guard against data loss and ensure availability. A bucket is like a folder in file systems.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(870),alt:"img"}})]),e._v(" "),s("p",[e._v("After putting files in S3, you can finally have a good night's sleep without worrying about data losses. To stop similar problems from happening in the future, you decide to do further research on areas you can improve. Here are a few areas you find:")]),e._v(" "),s("ul",[s("li",[e._v("Load balancer: Add a load balancer to distribute network traffic. A load balancer ensures evenly distributed traffic, and if a web server goes down, it will redistribute the traffic.")]),e._v(" "),s("li",[e._v("Web servers: After a load balancer is added, more web servers can be added/removed easily, depending on the traffic load.")]),e._v(" "),s("li",[e._v("Metadata database: Move the database out of the server to avoid single point of failure. In the meantime, set up data replication and sharding to meet the availability and scalability requirements.")]),e._v(" "),s("li",[e._v("File storage: Amazon S3 is used for file storage. To ensure availability and durability, files are replicated in two separate geographical regions.")])]),e._v(" "),s("p",[e._v("After applying the above improvements, you have successfully decoupled web servers, metadata database, and file storage from a single server. The updated design is shown")]),e._v(" "),s("p",[s("img",{attrs:{src:a(871),alt:"img"}})]),e._v(" "),s("h3",{attrs:{id:"sync-conflicts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-conflicts"}},[e._v("#")]),e._v(" Sync conflicts")]),e._v(" "),s("p",[e._v("For a large storage system like Google Drive, sync conflicts happen from time to time. When two users modify the same file or folder at the same time, a conflict happens. How can we resolve the conflict? Here is our strategy: the first version that gets processed wins, and the version that gets processed later receives a conflict. Figure below shows an example of a sync conflict.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(872),alt:"img"}})]),e._v(" "),s("p",[e._v("user 1 and user 2 tries to update the same file at the same time, but user 1’s file is processed by our system first. User 1’s update operation goes through, but, user 2 gets a sync conflict. How can we resolve the conflict for user 2? Our system presents both copies of the same file: user 2’s local copy and the latest version from the server (Figure below). User 2 has the option to merge both files or override one version with the other.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(873),alt:"img"}})]),e._v(" "),s("p",[e._v("While multiple users are editing the same document at the same, it is challenging to keep the document synchronized. Interested readers should refer to the reference material.")]),e._v(" "),s("h3",{attrs:{id:"high-level-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-level-design"}},[e._v("#")]),e._v(" High-level design")]),e._v(" "),s("p",[e._v("Figure below illustrates the proposed high-level design. Let us examine each component of the system.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(874),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("User")]),e._v(": A user uses the application either through a browser or mobile app.")]),e._v(" "),s("p",[s("strong",[e._v("Block servers")]),e._v(": Block servers upload blocks to cloud storage. Block storage, referred to as block-level storage, is a technology to store data files on cloud-based environments. A file can be split into several blocks, each with a unique hash value, stored in our metadata database. Each block is treated as an independent object and stored in our storage system (S3). To reconstruct a file, blocks are joined in a particular order. As for the block size, we use Dropbox as a reference: it sets the maximal size of a block to 4MB.")]),e._v(" "),s("p",[s("strong",[e._v("Cloud storage")]),e._v(": A file is split into smaller blocks and stored in cloud storage.")]),e._v(" "),s("p",[s("strong",[e._v("Cold storage")]),e._v(": Cold storage is a computer system designed for storing inactive data, meaning files are not accessed for a long time.")]),e._v(" "),s("p",[s("strong",[e._v("Load balancer")]),e._v(": A load balancer evenly distributes requests among API servers.")]),e._v(" "),s("p",[s("strong",[e._v("API servers")]),e._v(": These are responsible for almost everything other than the uploading flow. API servers are used for user authentication, managing user profile, updating file metadata, etc.")]),e._v(" "),s("p",[s("strong",[e._v("Metadata database")]),e._v(": It stores metadata of users, files, blocks, versions, etc. Please note that files are stored in the cloud and the metadata database only contains metadata.")]),e._v(" "),s("p",[s("strong",[e._v("Metadata cache")]),e._v(": Some of the metadata are cached for fast retrieval.")]),e._v(" "),s("p",[s("strong",[e._v("Notification service")]),e._v(": It is a publisher/subscriber system that allows data to be transferred from notification service to clients as certain events happen. In our specific case, notification service notifies relevant clients when a file is added/edited/removed elsewhere so they can pull the latest changes.")]),e._v(" "),s("p",[s("strong",[e._v("Offline backup queue")]),e._v(": If a client is offline and cannot pull the latest file changes, the offline backup queue stores the info so changes will be synced when the client is online.")]),e._v(" "),s("p",[e._v("We have discussed the design of Google Drive at the high-level. Some of the components are complicated and worth careful examination; we will discuss these in detail in the deep dive.")]),e._v(" "),s("h2",{attrs:{id:"step-3-design-deep-dive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-design-deep-dive"}},[e._v("#")]),e._v(" Step 3 - Design deep dive")]),e._v(" "),s("p",[e._v("We will take a close look at the following: block servers, metadata database, upload flow, download flow, notification service, save storage space and failure handling.")]),e._v(" "),s("h3",{attrs:{id:"block-servers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-servers"}},[e._v("#")]),e._v(" Block servers")]),e._v(" "),s("p",[e._v("For large files that are updated regularly, sending the whole file on each update consumes a lot of bandwidth. Two optimizations are proposed to minimize the amount of network traffic being transmitted:")]),e._v(" "),s("ul",[s("li",[e._v("Delta sync. When a file is modified, only modified blocks are synced instead of the whole file using a sync algorithm.")]),e._v(" "),s("li",[e._v("Compression. Applying compression on blocks can significantly reduce the data size. Thus, blocks are compressed using compression algorithms depending on file types. For example, gzip and bzip2 are used to compress text files. Different compression algorithms are needed to compress images and videos.")])]),e._v(" "),s("p",[e._v("In our system, block servers do the heavy lifting work for uploading files. Block servers process files passed from clients by splitting a file into blocks, compressing each block, and encrypting them. Instead of uploading the whole file to the storage system, only modified blocks are transferred.")]),e._v(" "),s("p",[e._v("Figure shows how a block server works when a new file is added.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(875),alt:"img"}})]),e._v(" "),s("ul",[s("li",[e._v("A file is split into smaller blocks.")]),e._v(" "),s("li",[e._v("Each block is compressed using compression algorithms.")]),e._v(" "),s("li",[e._v("To ensure security, each block is encrypted before it is sent to cloud storage.")]),e._v(" "),s("li",[e._v("Blocks are uploaded to the cloud storage")])]),e._v(" "),s("p",[e._v("Figure below illustrates delta sync, meaning only modified blocks are transferred to cloud storage. Highlighted blocks “block 2” and “block 5” represent changed blocks. Using delta sync, only those two blocks are uploaded to the cloud storage.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(876),alt:"img"}})]),e._v(" "),s("p",[e._v("Block servers allow us to save network traffic by providing delta sync and compression.")]),e._v(" "),s("h3",{attrs:{id:"high-consistency-requirement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-consistency-requirement"}},[e._v("#")]),e._v(" High consistency requirement")]),e._v(" "),s("p",[e._v("Our system requires strong consistency by default. It is unacceptable for a file to be shown differently by different clients at the same time. The system needs to provide strong consistency for metadata cache and database layers.")]),e._v(" "),s("p",[e._v("Memory caches adopt an eventual consistency model by default, which means different replicas might have different data. To achieve strong consistency, we must ensure the following:")]),e._v(" "),s("ul",[s("li",[e._v("Data in cache replicas and the master is consistent.")]),e._v(" "),s("li",[e._v("Invalidate caches on database write to ensure cache and database hold the same value.")])]),e._v(" "),s("p",[e._v("Achieving strong consistency in a relational database is easy because it maintains the ACID (Atomicity, Consistency, Isolation, Durability) properties. However, NoSQL databases do not support ACID properties by default. ACID properties must be programmatically incorporated in synchronization logic. In our design, we choose relational databases because the ACID is natively supported.")]),e._v(" "),s("h3",{attrs:{id:"metadata-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata-database"}},[e._v("#")]),e._v(" Metadata database")]),e._v(" "),s("p",[e._v("Figure shows the database schema design. Please note this is a highly simplified version as it only includes the most important tables and interesting fields.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(877),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("User")]),e._v(": The user table contains basic information about the user such as username, email, profile photo, etc.")]),e._v(" "),s("p",[s("strong",[e._v("Device")]),e._v(": Device table stores device info. Push_id is used for sending and receiving mobile push notifications. Please note a user can have multiple devices.")]),e._v(" "),s("p",[s("strong",[e._v("Namespace")]),e._v(": A namespace is the root directory of a user.")]),e._v(" "),s("p",[s("strong",[e._v("File")]),e._v(": File table stores everything related to the latest file.")]),e._v(" "),s("p",[s("strong",[e._v("File_version")]),e._v(": It stores version history of a file. Existing rows are read-only to keep the integrity of the file revision history.")]),e._v(" "),s("p",[s("strong",[e._v("Block")]),e._v(": It stores everything related to a file block. A file of any version can be reconstructed by joining all the blocks in the correct order.")]),e._v(" "),s("h3",{attrs:{id:"upload-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-flow"}},[e._v("#")]),e._v(" Upload flow")]),e._v(" "),s("p",[e._v("Let us discuss what happens when a client uploads a file. To better understand the flow, we draw the sequence diagram as shown in Figure below.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(878),alt:"img"}})]),e._v(" "),s("p",[e._v("two requests are sent in parallel: add file metadata and upload the file to cloud storage. Both requests originate from client 1.")]),e._v(" "),s("ul",[s("li",[e._v("Add file metadata.\n"),s("ol",[s("li",[e._v("Client 1 sends a request to add the metadata of the new file.")]),e._v(" "),s("li",[e._v("Store the new file metadata in metadata DB and change the file upload status to “pending.”")]),e._v(" "),s("li",[e._v("Notify the notification service that a new file is being added.")]),e._v(" "),s("li",[e._v("The notification service notifies relevant clients (client 2) that a file is being uploaded.")])])]),e._v(" "),s("li",[e._v("Upload files to cloud storage.\n"),s("ul",[s("li",[e._v("2.1 Client 1 uploads the content of the file to block servers.")]),e._v(" "),s("li",[e._v("2.2 Block servers chunk the files into blocks, compress, encrypt the blocks, and upload them to cloud storage.")]),e._v(" "),s("li",[e._v("2.3 Once the file is uploaded, cloud storage triggers upload completion callback. The request is sent to API servers.")]),e._v(" "),s("li",[e._v("2.4 File status changed to “uploaded” in Metadata DB.")]),e._v(" "),s("li",[e._v("2.5 Notify the notification service that a file status is changed to “uploaded.”")]),e._v(" "),s("li",[e._v("2.6 The notification service notifies relevant clients (client 2) that a file is fully uploaded.")])])])]),e._v(" "),s("p",[e._v("When a file is edited, the flow is similar, so we will not repeat it.")]),e._v(" "),s("h3",{attrs:{id:"download-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-flow"}},[e._v("#")]),e._v(" Download flow")]),e._v(" "),s("p",[e._v("Download flow is triggered when a file is added or edited elsewhere. How does a client know if a file is added or edited by another client? There are two ways a client can know:")]),e._v(" "),s("ul",[s("li",[e._v("If client A is online while a file is changed by another client, notification service will inform client A that changes are made somewhere so it needs to pull the latest data.")]),e._v(" "),s("li",[e._v("If client A is offline while a file is changed by another client, data will be saved to the cache. When the offline client is online again, it pulls the latest changes.")])]),e._v(" "),s("p",[e._v("Once a client knows a file is changed, it first requests metadata via API servers, then downloads blocks to construct the file. Figure below shows the detailed flow. Note, only the most important components are shown in the diagram due to space constraint.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(879),alt:"img"}})]),e._v(" "),s("ol",[s("li",[e._v("Notification service informs client 2 that a file is changed somewhere else.")]),e._v(" "),s("li",[e._v("Once client 2 knows that new updates are available, it sends a request to fetch metadata.")]),e._v(" "),s("li",[e._v("API servers call metadata DB to fetch metadata of the changes.")]),e._v(" "),s("li",[e._v("Metadata is returned to the API servers.")]),e._v(" "),s("li",[e._v("Client 2 gets the metadata.")]),e._v(" "),s("li",[e._v("Once the client receives the metadata, it sends requests to block servers to download blocks.")]),e._v(" "),s("li",[e._v("Block servers first download blocks from cloud storage.")]),e._v(" "),s("li",[e._v("Cloud storage returns blocks to the block servers.")]),e._v(" "),s("li",[e._v("Client 2 downloads all the new blocks to reconstruct the file.")])]),e._v(" "),s("h3",{attrs:{id:"notification-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notification-service"}},[e._v("#")]),e._v(" Notification service")]),e._v(" "),s("p",[e._v("To maintain file consistency, any mutation of a file performed locally needs to be informed to other clients to reduce conflicts. Notification service is built to serve this purpose. At the high-level, notification service allows data to be transferred to clients as events happen. Here are a few options:")]),e._v(" "),s("ul",[s("li",[e._v("Long polling. Dropbox uses long polling .")]),e._v(" "),s("li",[e._v("WebSocket. WebSocket provides a persistent connection between the client and the server. Communication is bi-directional.")])]),e._v(" "),s("p",[e._v("Even though both options work well, we opt for long polling for the following two reasons:")]),e._v(" "),s("ul",[s("li",[e._v("Communication for notification service is not bi-directional. The server sends information about file changes to the client, but not vice versa.")]),e._v(" "),s("li",[e._v("WebSocket is suited for real-time bi-directional communication such as a chat app. For Google Drive, notifications are sent infrequently with no burst of data.")])]),e._v(" "),s("p",[e._v("With long polling, each client establishes a long poll connection to the notification service. If changes to a file are detected, the client will close the long poll connection. Closing the connection means a client must connect to the metadata server to download the latest changes. After a response is received or connection timeout is reached, a client immediately sends a new request to keep the connection open.")]),e._v(" "),s("h3",{attrs:{id:"save-storage-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#save-storage-space"}},[e._v("#")]),e._v(" Save storage space")]),e._v(" "),s("p",[e._v("To support file version history and ensure reliability, multiple versions of the same file are stored across multiple data centers. Storage space can be filled up quickly with frequent backups of all file revisions. Three techniques are proposed to reduce storage costs:")]),e._v(" "),s("ul",[s("li",[e._v("De-duplicate data blocks. Eliminating redundant blocks at the account level is an easy\nway to save space. Two blocks are identical if they have the same hash value.")]),e._v(" "),s("li",[e._v("Adopt an intelligent data backup strategy. Two optimization strategies can be applied:\n"),s("ul",[s("li",[e._v("Set a limit: We can set a limit for the number of versions to store. If the limit is reached, the oldest version will be replaced with the new version.")]),e._v(" "),s("li",[e._v("Keep valuable versions only: Some files might be edited frequently. For example, saving every edited version for a heavily modified document could mean the file is saved over 1000 times within a short period. To avoid unnecessary copies, we could limit the number of saved versions. We give more weight to recent versions. Experimentation is helpful to figure out the optimal number of versions to save.")])])]),e._v(" "),s("li",[e._v("Moving infrequently used data to cold storage. Cold data is the data that has not been active for months or years. Cold storage like Amazon S3 glacier is much cheaper than S3.")])]),e._v(" "),s("h3",{attrs:{id:"failure-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failure-handling"}},[e._v("#")]),e._v(" Failure Handling")]),e._v(" "),s("p",[e._v("Failures can occur in a large-scale system and we must adopt design strategies to address these failures. Your interviewer might be interested in hearing about how you handle the following system failures:")]),e._v(" "),s("ul",[s("li",[e._v("Load balancer failure: If a load balancer fails, the secondary would become active and pick up the traffic. Load balancers usually monitor each other using a heartbeat, a periodic signal sent between load balancers. A load balancer is considered as failed if it has not sent a heartbeat for some time.")]),e._v(" "),s("li",[e._v("Block server failure: If a block server fails, other servers pick up unfinished or pending jobs.")]),e._v(" "),s("li",[e._v("Cloud storage failure: S3 buckets are replicated multiple times in different regions. If files are not available in one region, they can be fetched from different regions.")]),e._v(" "),s("li",[e._v("API server failure: It is a stateless service. If an API server fails, the traffic is redirected to other API servers by a load balancer.")]),e._v(" "),s("li",[e._v("Metadata cache failure: Metadata cache servers are replicated multiple times. If one node goes down, you can still access other nodes to fetch data. We will bring up a new cache server to replace the failed one.")]),e._v(" "),s("li",[e._v("Metadata DB failure.\n"),s("ul",[s("li",[e._v("Master down: If the master is down, promote one of the slaves to act as a new master and bring up a new slave node.")]),e._v(" "),s("li",[e._v("Slave down: If a slave is down, you can use another slave for read operations and bring another database server to replace the failed one.")])])]),e._v(" "),s("li",[e._v("Notification service failure: Every online user keeps a long poll connection with the notification server. Thus, each notification server is connected with many users. According to the Dropbox talk in 2012, over 1 million connections are open per machine. If a server goes down, all the long poll connections are lost so clients must reconnect to a different server. Even though one server can keep many open connections, it cannot reconnect all the lost connections at once. Reconnecting with all the lost clients is a relatively slow process.")]),e._v(" "),s("li",[e._v("Offline backup queue failure: Queues are replicated multiple times. If one queue fails, consumers of the queue may need to re-subscribe to the backup queue.")])]),e._v(" "),s("h2",{attrs:{id:"step-4-wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-wrap-up"}},[e._v("#")]),e._v(" Step 4 - Wrap up")]),e._v(" "),s("p",[e._v("We proposed a system design to support Google Drive. The combination of strong consistency, low network bandwidth and fast sync make the design interesting. Our design contains two flows: manage file metadata and file sync. Notification service is another\nimportant component of the system. It uses long polling to keep clients up to date with file changes.")]),e._v(" "),s("p",[e._v("Like any system design interview questions, there is no perfect solution. Every company has its unique constraints and you must design a system to fit those constraints. Knowing the tradeoffs of your design and technology choices are important. If there are a few minutes left, you can talk about different design choices.")]),e._v(" "),s("p",[e._v("For example, we can upload files directly to cloud storage from the client instead of going through block servers. The advantage of this approach is that it makes file upload faster because a file only needs to be transferred once to the cloud storage. In our design, a file is transferred to block servers first, and then to the cloud storage. However, the new approach\nhas a few drawbacks:")]),e._v(" "),s("ul",[s("li",[e._v("First, the same chunking, compression, and encryption logic must be implemented on different platforms (iOS, Android, Web). It is error-prone and requires a lot of engineering effort. In our design, all those logics are implemented in a centralized place: block servers.")]),e._v(" "),s("li",[e._v("Second, as a client can easily be hacked or manipulated, implementing encrypting logic on the client side is not ideal. Another interesting evolution of the system is moving online/offline logic to a separate service. Let us call it presence service. By moving presence service out of notification servers, online/offline functionality can easily be integrated by other services.")])])])}),[],!1,null,null,null);t.default=i.exports},867:function(e,t,a){e.exports=a.p+"assets/img/f3.9e64dc1c.png"},868:function(e,t,a){e.exports=a.p+"assets/img/f4.a94f359e.png"},869:function(e,t,a){e.exports=a.p+"assets/img/f5.bfe174dc.png"},870:function(e,t,a){e.exports=a.p+"assets/img/f6.5123bd50.png"},871:function(e,t,a){e.exports=a.p+"assets/img/f7.859c7897.png"},872:function(e,t,a){e.exports=a.p+"assets/img/f8.7353e3c9.png"},873:function(e,t,a){e.exports=a.p+"assets/img/f9.517c90b4.png"},874:function(e,t,a){e.exports=a.p+"assets/img/f10.9a89acbd.png"},875:function(e,t,a){e.exports=a.p+"assets/img/f11.ada82b3c.png"},876:function(e,t,a){e.exports=a.p+"assets/img/f12.cb6ef4bd.png"},877:function(e,t,a){e.exports=a.p+"assets/img/f13.aa336f1f.png"},878:function(e,t,a){e.exports=a.p+"assets/img/f14.83202626.png"},879:function(e,t,a){e.exports=a.p+"assets/img/f15.de436b26.png"}}]);