(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1152:function(e,a,t){e.exports=t.p+"assets/img/26.8a9d590d.png"},1153:function(e,a,t){e.exports=t.p+"assets/img/27.d32c3002.png"},1154:function(e,a,t){e.exports=t.p+"assets/img/28.f2dc312d.png"},1660:function(e,a,t){"use strict";t.r(a);var n=t(7),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"designing-yelp-or-nearby-friends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#designing-yelp-or-nearby-friends"}},[e._v("#")]),e._v(" Designing Yelp or Nearby Friends")]),e._v(" "),n("p",[e._v("Let's design a Yelp like service, where users can search for nearby places like restaurants, theaters, or\nshopping malls, etc., and can also add/view reviews of places. Similar Services: Proximity server.\nDifficulty Level: Hard")]),e._v(" "),n("h2",{attrs:{id:"_1-why-yelp-or-proximity-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-yelp-or-proximity-server"}},[e._v("#")]),e._v(" 1. Why Yelp or Proximity Server?")]),e._v(" "),n("p",[e._v("Proximity servers are used to discover nearby attractions like places, events, etc. If you haven’t used\nyelp.com before, please try it before proceeding (you can search for nearby restaurants, theaters, etc.)\nand spend some time understanding different options that the website offers. This will help you a lot in\nunderstanding this chapter better.")]),e._v(" "),n("h2",{attrs:{id:"_2-requirements-and-goals-of-the-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-requirements-and-goals-of-the-system"}},[e._v("#")]),e._v(" 2. Requirements and Goals of the System")]),e._v(" "),n("p",[e._v("What do we wish to achieve from a Yelp like service? Our service will be storing information about\ndifferent places so that users can perform a search on them. Upon querying, our service will return a list\nof places around the user.")]),e._v(" "),n("p",[e._v("Our Yelp-like service should meet the following requirements:")]),e._v(" "),n("h3",{attrs:{id:"functional-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functional-requirements"}},[e._v("#")]),e._v(" Functional Requirements:")]),e._v(" "),n("ol",[n("li",[e._v("Users should be able to add/delete/update Places.")]),e._v(" "),n("li",[e._v("Given their location (longitude/latitude), users should be able to find all nearby places within a\ngiven radius.")]),e._v(" "),n("li",[e._v("Users should be able to add feedback/review about a place. The feedback can have pictures,\ntext, and a rating.")])]),e._v(" "),n("h3",{attrs:{id:"non-functional-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[e._v("#")]),e._v(" Non-functional Requirements:")]),e._v(" "),n("ol",[n("li",[e._v("Users should have a real-time search experience with minimum latency.")]),e._v(" "),n("li",[e._v("Our service should support a heavy search load. There will be a lot of search requests compared\nto adding a new place.")])]),e._v(" "),n("h2",{attrs:{id:"_3-scale-estimation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-scale-estimation"}},[e._v("#")]),e._v(" 3. Scale Estimation")]),e._v(" "),n("p",[e._v("Let’s build our system assuming that we have 500M places and 100K queries per second (QPS). Let’s\nalso assume a 20% growth in the number of places and QPS each year.")]),e._v(" "),n("h2",{attrs:{id:"_4-database-schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-database-schema"}},[e._v("#")]),e._v(" 4. Database Schema")]),e._v(" "),n("p",[e._v("Each location can have the following fields:")]),e._v(" "),n("ol",[n("li",[e._v("LocationID (8 bytes): Uniquely identifies a location.")]),e._v(" "),n("li",[e._v("Name (256 bytes)")]),e._v(" "),n("li",[e._v("Latitude (8 bytes)")]),e._v(" "),n("li",[e._v("Longitude (8 bytes)")]),e._v(" "),n("li",[e._v("Description (512 bytes)")]),e._v(" "),n("li",[e._v("Category (1 byte): E.g., coffee shop, restaurant, theater, etc.")])]),e._v(" "),n("p",[e._v("Although a four bytes number can uniquely identify 500M locations, with future growth in mind, we\nwill go with 8 bytes for LocationID.")]),e._v(" "),n("p",[e._v("Total size: 8 + 256 + 8 + 8 + 512 + 1 => 793 bytes")]),e._v(" "),n("p",[e._v("We also need to store reviews, photos, and ratings of a Place. We can have a separate table to store\nreviews for Places:")]),e._v(" "),n("ol",[n("li",[e._v("LocationID (8 bytes)")]),e._v(" "),n("li",[e._v("ReviewID (4 bytes): Uniquely identifies a review, assuming any location will not have more than 2^32 reviews.")]),e._v(" "),n("li",[e._v("ReviewText (512 bytes)")]),e._v(" "),n("li",[e._v("Rating (1 byte): how many stars a place gets out of ten.")])]),e._v(" "),n("p",[e._v("Similarly, we can have a separate table to store photos for Places and Reviews.")]),e._v(" "),n("h2",{attrs:{id:"_5-system-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-system-apis"}},[e._v("#")]),e._v(" 5. System APIs")]),e._v(" "),n("p",[e._v("We can have SOAP or REST APIs to expose the functionality of our service. The following could be\nthe definition of the API for searching:")]),e._v(" "),n("p",[n("code",[e._v("search(api_dev_key, search_terms, user_location, radius_filter, maximum_results_to_return, category_filter, sort, page_token)")])]),e._v(" "),n("p",[n("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("api_dev_key (string): The API developer key of a registered account. This will be used to, among other things, throttle users based on their allocated quota.")]),e._v(" "),n("li",[e._v("search_terms (string): A string containing the search terms.")]),e._v(" "),n("li",[e._v("user_location (string): Location of the user performing the search.")]),e._v(" "),n("li",[e._v("radius_filter (number): Optional search radius in meters.")]),e._v(" "),n("li",[e._v("maximum_results_to_return (number): Number of business results to return.")]),e._v(" "),n("li",[e._v("category_filter (string): Optional category to filter search results, e.g., Restaurants, Shopping Centers, etc.")]),e._v(" "),n("li",[e._v("sort (number): Optional sort mode:\n"),n("ul",[n("li",[e._v("Best matched (0 - default)")]),e._v(" "),n("li",[e._v("Minimum distance (1)")]),e._v(" "),n("li",[e._v("Highest rated (2).")])])]),e._v(" "),n("li",[e._v("page_token (string): This token will specify a page in the result set that should be returned.")])]),e._v(" "),n("p",[n("strong",[e._v("Returns")]),e._v(": (JSON)"),n("br"),e._v("\nA JSON containing information about a list of businesses matching the search query. Each result entry\nwill have the business name, address, category, rating, and thumbnail.")]),e._v(" "),n("h2",{attrs:{id:"_6-basic-system-design-and-algorithm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-basic-system-design-and-algorithm"}},[e._v("#")]),e._v(" 6. Basic System Design and Algorithm")]),e._v(" "),n("p",[e._v("At a high level, we need to store and index each dataset described above (places, reviews, etc.). For\nusers to query this massive database, the indexing should be read efficient, since while searching for\nthe nearby places users expect to see the results in real-time.")]),e._v(" "),n("p",[e._v("Given that the location of a place doesn’t change that often, we don’t need to worry about frequent\nupdates of the data. As a contrast, if we intend to build a service where objects do change their location\nfrequently, e.g., people or taxis, then we might come up with a very different design.")]),e._v(" "),n("p",[e._v("Let’s see what are different ways to store this data and also find out which method will suit best for our\nuse cases:")]),e._v(" "),n("h3",{attrs:{id:"a-sql-solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-sql-solution"}},[e._v("#")]),e._v(" a. SQL solution")]),e._v(" "),n("p",[e._v("One simple solution could be to store all the data in a database like MySQL. Each place will be stored\nin a separate row, uniquely identified by LocationID. Each place will have its longitude and latitude\nstored separately in two different columns, and to perform a fast search; we should have indexes on\nboth these fields.")]),e._v(" "),n("p",[e._v("To find all the nearby places of a given location (X, Y) within a radius ‘D’, we can query like this:")]),e._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Select")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" Places \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" Latitude "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("between")]),e._v(" X"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" X"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" Longitude "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("between")]),e._v(" Y"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" Y"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("D\n")])])]),n("p",[e._v("The above query is not completely accurate, as we know that to find the distance between two points\nwe have to use the distance formula (Pythagorean theorem), but for simplicity let’s take this.")]),e._v(" "),n("p",[n("strong",[e._v("How efficient would this query be?")]),e._v(" We have estimated 500M places to be stored in our service. Since\nwe have two separate indexes, each index can return a huge list of places and performing an\nintersection on those two lists won’t be efficient. Another way to look at this problem is that there could\nbe too many locations between ‘X-D’ and ‘X+D’, and similarly between ‘Y-D’ and ‘Y+D’. If we can\nsomehow shorten these lists, it can improve the performance of our query.")]),e._v(" "),n("h3",{attrs:{id:"b-grids"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-grids"}},[e._v("#")]),e._v(" b. Grids")]),e._v(" "),n("p",[e._v("We can divide the whole map into smaller grids to group locations into smaller sets. Each grid will\nstore all the Places residing within a specific range of longitude and latitude. This scheme would enable\nus to query only a few grids to find nearby places. Based on a given location and radius, we can find all\nthe neighboring grids and then query these grids to find nearby places.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(1152),alt:"img"}})]),e._v(" "),n("p",[e._v("Let’s assume that GridID (a four bytes number) would uniquely identify grids in our system.")]),e._v(" "),n("p",[n("strong",[e._v("What could be a reasonable grid size?")]),e._v(" Grid size could be equal to the distance we would like to\nquery since we also want to reduce the number of grids. If the grid size is equal to the distance we want\nto query, then we only need to search within the grid which contains the given location and neighboring\neight grids. Since our grids would be statically defined (from the fixed grid size), we can easily find the\ngrid number of any location (lat, long) and its neighboring grids.")]),e._v(" "),n("p",[e._v("In the database, we can store the GridID with each location and have an index on it, too, for faster\nsearching. Now, our query will look like:")]),e._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Select")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" Places \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" Latitude "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("between")]),e._v(" X"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" X"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" Longitude "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("between")]),e._v(" Y"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" Y"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v("\n    GridID "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GridID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" GridID1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" GridID2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" GridID8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("This will undoubtedly improve the runtime of our query.")]),e._v(" "),n("p",[n("strong",[e._v("Should we keep our index in memory?")]),e._v(" Maintaining the index in memory will improve the\nperformance of our service. We can keep our index in a hash table where ‘key’ is the grid number and\n‘value’ is the list of places contained in that grid.")]),e._v(" "),n("p",[n("strong",[e._v("How much memory will we need to store the index?")]),e._v(" Let’s assume our search radius is 10 miles;\ngiven that the total area of the earth is around 200 million square miles, we will have 20 million grids.\nWe would need a four bytes number to uniquely identify each grid and, since LocationID is 8 bytes, we\nwould need 4GB of memory (ignoring hash table overhead) to store the index.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(4 * 20M) + (8 * 500M) ~= 4 GB\n")])])]),n("p",[e._v("This solution can still run slow for those grids that have a lot of places since our places are not\nuniformly distributed among grids. We can have a thickly dense area with a lot of places, and on the\nother hand, we can have areas which are sparsely populated.")]),e._v(" "),n("p",[e._v("This problem can be solved if we can dynamically adjust our grid size such that whenever we have a\ngrid with a lot of places we break it down to create smaller grids. A couple of challenges with this\napproach could be:")]),e._v(" "),n("ol",[n("li",[e._v("how to map these grids to locations and")]),e._v(" "),n("li",[e._v("how to find all the neighboring grids of a grid.")])]),e._v(" "),n("h3",{attrs:{id:"c-dynamic-size-grids"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-dynamic-size-grids"}},[e._v("#")]),e._v(" c. Dynamic size grids")]),e._v(" "),n("p",[e._v("Let’s assume we don’t want to have more than 500 places in a grid so that we can have a faster\nsearching. So, whenever a grid reaches this limit, we break it down into four grids of equal size and\ndistribute places among them. This means thickly populated areas like downtown San Francisco will\nhave a lot of grids, and sparsely populated area like the Pacific Ocean will have large grids with places\nonly around the coastal lines.")]),e._v(" "),n("p",[n("strong",[e._v("What data-structure can hold this information?")]),e._v(" A tree in which each node has four children can\nserve our purpose. Each node will represent a grid and will contain information about all the places in\nthat grid. If a node reaches our limit of 500 places, we will break it down to create four child nodes\nunder it and distribute places among them. In this way, all the leaf nodes will represent the grids that\ncannot be further broken down. So leaf nodes will keep a list of places with them. This tree structure in\nwhich each node can have four children is called a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quadtree",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuadTree"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("img",{attrs:{src:t(1153),alt:"img"}})]),e._v(" "),n("p",[n("strong",[e._v("How will we build a QuadTree?")]),e._v(" We will start with one node that will represent the whole world in\none grid. Since it will have more than 500 locations, we will break it down into four nodes and\ndistribute locations among them. We will keep repeating this process with each child node until there\nare no nodes left with more than 500 locations.")]),e._v(" "),n("p",[n("strong",[e._v("How will we find the grid for a given location?")]),e._v(" We will start with the root node and search\ndownward to find our required node/grid. At each step, we will see if the current node we are visiting\nhas children. If it has, we will move to the child node that contains our desired location and repeat this\nprocess. If the node does not have any children, then that is our desired node.")]),e._v(" "),n("p",[n("strong",[e._v("How will we find neighboring grids of a given grid?")]),e._v(" Since only leaf nodes contain a list of locations,\nwe can connect all leaf nodes with a doubly linked list. This way we can iterate forward or backward\namong the neighboring leaf nodes to find out our desired locations. Another approach for finding\nadjacent grids would be through parent nodes. We can keep a pointer in each node to access its parent,\nand since each parent node has pointers to all of its children, we can easily find siblings of a node. We\ncan keep expanding our search for neighboring grids by going up through the parent pointers.")]),e._v(" "),n("p",[e._v("Once we have nearby LocationIDs, we can query the backend database to find details about those\nplaces.")]),e._v(" "),n("p",[n("strong",[e._v("What will be the search workflow?")]),e._v(" We will first find the node that contains the user’s location. If that\nnode has enough desired places, we can return them to the user. If not, we will keep expanding to the\nneighboring nodes (either through the parent pointers or doubly linked list) until either we find the\nrequired number of places or exhaust our search based on the maximum radius.")]),e._v(" "),n("p",[n("strong",[e._v("How much memory will be needed to store the QuadTree?")]),e._v(" For each Place, if we cache only\nLocationID and Lat/Long, we would need 12GB to store all places.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("24 * 500M => 12 GB \n")])])]),n("p",[e._v("Since each grid can have a maximum of 500 places, and we have 500M locations, how many total grids\nwe will have?")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("500M / 500 => 1M grids\n")])])]),n("p",[e._v("Which means we will have 1M leaf nodes and they will be holding 12GB of location data. A QuadTree\nwith 1M leaf nodes will have approximately 1/3rd internal nodes, and each internal node will have 4\npointers (for its children). If each pointer is 8 bytes, then the memory we need to store all internal\nnodes would be:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1M * 1/3 * 4 * 8 = 10 MB\n")])])]),n("p",[e._v("So, total memory required to hold the whole QuadTree would be 12.01GB. This can easily fit into a\nmodern-day server.")]),e._v(" "),n("p",[n("strong",[e._v("How would we insert a new Place into our system?")]),e._v(" Whenever a new Place is added by a user, we\nneed to insert it into the databases as well as in the QuadTree. If our tree resides on one server, it is easy\nto add a new Place, but if the QuadTree is distributed among different servers, first we need to find the\ngrid/server of the new Place and then add it there (discussed in the next section).")]),e._v(" "),n("h2",{attrs:{id:"_7-data-partitioning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-data-partitioning"}},[e._v("#")]),e._v(" 7. Data Partitioning")]),e._v(" "),n("p",[e._v("What if we have a huge number of places such that our index does not fit into a single machine’s\nmemory? With 20% growth each year we will reach the memory limit of the server in the future. Also,\nwhat if one server cannot serve the desired read traffic? To resolve these issues, we must partition our\nQuadTree!")]),e._v(" "),n("p",[e._v("We will explore two solutions here (both of these partitioning schemes can be applied to databases, too):")]),e._v(" "),n("p",[n("strong",[e._v("a. Sharding based on regions")]),e._v(": We can divide our places into regions (like zip codes), such that all\nplaces belonging to a region will be stored on a fixed node. To store a place we will find the server\nthrough its region and, similarly, while querying for nearby places we will ask the region server that\ncontains user’s location. This approach has a couple of issues:")]),e._v(" "),n("ol",[n("li",[e._v("What if a region becomes hot? There would be a lot of queries on the server holding that region,\nmaking it perform slow. This will affect the performance of our service.")]),e._v(" "),n("li",[e._v("Over time, some regions can end up storing a lot of places compared to others. Hence,\nmaintaining a uniform distribution of places, while regions are growing is quite difficult.\nTo recover from these situations, either we have to repartition our data or use consistent hashing.")])]),e._v(" "),n("p",[n("strong",[e._v("b. Sharding based on LocationID:")]),e._v(" Our hash function will map each LocationID to a server where we\nwill store that place. While building our QuadTree, we will iterate through all the places and calculate\nthe hash of each LocationID to find a server where it would be stored. To find places near a location, we have to query all servers and each server will return a set of nearby places. A centralized server will\naggregate these results to return them to the user.")]),e._v(" "),n("p",[n("strong",[e._v("Will we have different QuadTree structure on different partitions?")]),e._v(" Yes, this can happen since it is\nnot guaranteed that we will have an equal number of places in any given grid on all partitions.\nHowever, we do make sure that all servers have approximately an equal number of Places. This\ndifferent tree structure on different servers will not cause any issue though, as we will be searching all\nthe neighboring grids within the given radius on all partitions.")]),e._v(" "),n("p",[e._v("The remaining part of this chapter assumes that we have partitioned our data based on LocationID.\n"),n("img",{attrs:{src:t(1154),alt:"img"}})]),e._v(" "),n("h2",{attrs:{id:"_8-replication-and-fault-tolerance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-replication-and-fault-tolerance"}},[e._v("#")]),e._v(" 8. Replication and Fault Tolerance")]),e._v(" "),n("p",[e._v("Having replicas of QuadTree servers can provide an alternate to data partitioning. To distribute read\ntraffic, we can have replicas of each QuadTree server. We can have a master-slave configuration where\nreplicas (slaves) will only serve read traffic; all write traffic will first go to the master and then applied\nto slaves. Slaves might not have some recently inserted places (a few milliseconds delay will be there),\nbut this could be acceptable.")]),e._v(" "),n("p",[e._v("What will happen when a QuadTree server dies? We can have a secondary replica of each server and, if\nprimary dies, it can take control after the failover. Both primary and secondary servers will have the\nsame QuadTree structure.")]),e._v(" "),n("p",[n("strong",[e._v("What if both primary and secondary servers die at the same time?")]),e._v(" We have to allocate a new\nserver and rebuild the same QuadTree on it. How can we do that, since we don’t know what places\nwere kept on this server? The brute-force solution would be to iterate through the whole database and\nfilter LocationIDs using our hash function to figure out all the required places that will be stored on this\nserver. This would be inefficient and slow; also, during the time when the server is being rebuilt, we\nwill not be able to serve any query from it, thus missing some places that should have been seen by\nusers.")]),e._v(" "),n("p",[n("strong",[e._v("How can we efficiently retrieve a mapping between Places and QuadTree server?")]),e._v(" We have to build\na reverse index that will map all the Places to their QuadTree server. We can have a separate QuadTree\nIndex server that will hold this information. We will need to build a HashMap where the ‘key’ is the\nQuadTree server number and the ‘value’ is a HashSet containing all the Places being kept on that\nQuadTree server. We need to store LocationID and Lat/Long with each place because information\nservers can build their QuadTrees through this. Notice that we are keeping Places’ data in a HashSet,\nthis will enable us to add/remove Places from our index quickly. So now, whenever a QuadTree server\nneeds to rebuild itself, it can simply ask the QuadTree Index server for all the Places it needs to store.\nThis approach will surely be quite fast. We should also have a replica of the QuadTree Index server for\nfault tolerance. If a QuadTree Index server dies, it can always rebuild its index from iterating through\nthe database.")]),e._v(" "),n("h2",{attrs:{id:"_9-cache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-cache"}},[e._v("#")]),e._v(" 9. Cache")]),e._v(" "),n("p",[e._v("To deal with hot Places, we can introduce a cache in front of our database. We can use an off-the-shelf\nsolution like Memcache, which can store all data about hot places. Application servers, before hitting\nthe backend database, can quickly check if the cache has that Place. Based on clients’ usage pattern, we\ncan adjust how many cache servers we need. For cache eviction policy, Least Recently Used (LRU)\nseems suitable for our system.")]),e._v(" "),n("h2",{attrs:{id:"_10-load-balancing-lb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-load-balancing-lb"}},[e._v("#")]),e._v(" 10. Load Balancing (LB)")]),e._v(" "),n("p",[e._v("We can add LB layer at two places in our system 1) Between Clients and Application servers and 2)\nBetween Application servers and Backend server. Initially, a simple Round Robin approach can be\nadopted; that will distribute all incoming requests equally among backend servers. This LB is simple to\nimplement and does not introduce any overhead. Another benefit of this approach is if a server is dead\nthe load balancer will take it out of the rotation and will stop sending any traffic to it.\nA problem with Round Robin LB is, it won’t take server load into consideration. If a server is\noverloaded or slow, the load balancer will not stop sending new requests to that server. To handle this, a\nmore intelligent LB solution would be needed that periodically queries backend server about their load\nand adjusts traffic based on that.")]),e._v(" "),n("h2",{attrs:{id:"_11-ranking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-ranking"}},[e._v("#")]),e._v(" 11. Ranking")]),e._v(" "),n("p",[e._v("How about if we want to rank the search results not just by proximity but also by popularity or relevance?")]),e._v(" "),n("p",[n("strong",[e._v("How can we return most popular places within a given radius?")]),e._v(" Let’s assume we keep track of the\noverall popularity of each place. An aggregated number can represent this popularity in our system,\ne.g., how many stars a place gets out of ten (this would be an average of different rankings given by\nusers)? We will store this number in the database as well as in the QuadTree. While searching for the\ntop 100 places within a given radius, we can ask each partition of the QuadTree to return the top 100 places with maximum popularity. Then the aggregator server can determine the top 100 places among\nall the places returned by different partitions.")]),e._v(" "),n("p",[e._v("Remember that we didn’t build our system to update place’s data frequently. With this design, how can\nwe modify the popularity of a place in our QuadTree? Although we can search a place and update its\npopularity in the QuadTree, it would take a lot of resources and can affect search requests and system\nthroughput. Assuming the popularity of a place is not expected to reflect in the system within a few\nhours, we can decide to update it once or twice a day, especially when the load on the system is\nminimum.")])])}),[],!1,null,null,null);a.default=s.exports}}]);