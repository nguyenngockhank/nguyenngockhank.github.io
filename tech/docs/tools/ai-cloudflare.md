# Cloudflare tools

## 1. Compute – Chạy code và xử lý logic

Service	| Dùng để làm gì? |	Use case
---- | ----- | ----
Workers |	Chạy backend/serverless functions |	API, webhook, business logic
Workers AI	| Chạy AI models ngay trên Cloudflare |Classification, embedding, summarization
Durable Objects | Stateful compute, giữ trạng thái và đồng bộ	| Agent session, WebSocket, rate limiter
Containers |	Chạy containerized applications | Python service, custom runtime, tool service
Pages |	Hosting frontend |	Dashboard, admin panel
Pages Functions |	Backend logic đi kèm Pages |	API cho frontend
Browser Rendering	| Điều khiển browser headless	| Scraping, screenshot, browser automation

## 2. Background Jobs – Xử lý công việc bất đồng bộ

Service	| Dùng để làm gì? |	Use case
---- | ----- | ----
Workflows	| Orchestrate các task nhiều bước, chạy lâu, có trạng thái và retry	| Split task, xử lý ticket nhiều bước
Queues	| Message queue, xử lý task bất đồng bộ |	Đẩy feedback vào hàng đợi
Cron Triggers	| Chạy Worker theo lịch |	Đồng bộ dữ liệu mỗi 5 phút
Durable Objects Alarms	| Lên lịch callback cho từng Durable Object |	Retry, timeout, delayed execution


## 3. Storage & Database – Lưu trữ dữ liệu


Service	| Dùng để làm gì? |	Use case
---- | ----- | ----
D1	| Serverless SQL database (SQLite)	| Lưu users, tickets, feedback
Workers KV 	| Key-value storage, phân phối dữ liệu toàn cầu	| Config, cache, mapping
R2	| Object storage (tương tự S3)	| Lưu attachments, images, documents
Durable Objects Storage	| Lưu state có tính nhất quán cao	| Agent state, session
Hyperdrive	| Kết nối và tối ưu truy vấn database bên ngoài	| Kết nối PostgreSQL
Vectorize	| Vector database	| Semantic search, tìm feedback tương tự
K2	| Durable event streaming	| Event log, nhiều consumer đọc cùng event
Analytics Engine	| Lưu và truy vấn dữ liệu analytics dạng time-series	| Metrics, usage, event analytics
Basin	| Data ingestion, catalog và query	| Thu thập dữ liệu lớn, analytics pipelines


## 4. AI – Các dịch vụ AI

Service	| Dùng để làm gì? |	Use case
---- | ----- | ----
Workers AI	| Chạy AI models |	Classification, embeddings, summarization
AI Gateway	| Proxy và quản lý AI requests |	Logging, caching, analytics, rate limiting
Vectorize	| Lưu embeddings và tìm kiếm vector |	Tìm ticket tương tự
AI Search	| Managed search/RAG trên dữ liệu |	Hỏi đáp trên tài liệu nội bộ
Agents SDK	| Framework xây dựng AI Agent |	Chatbot, agent có tools, state
MCP Server	| Expose tools cho AI clients qua MCP |	Cho Claude/Codex/Hermes gọi API của mình
Sandbox SDK	| Môi trường thực thi code cô lập |	Agent chạy shell, code, filesystem


## 5. Media & Browser – Xử lý nội dung

Service	| Dùng để làm gì? |	Use case
---- | ----- | ----
Browser Rendering / Browser Run	| Chạy browser tự động |	Scraping, screenshot, browser automation
Cloudflare Images	| Upload, resize, optimize và deliver ảnh |	Avatar, thumbnails
Cloudflare Stream	| Video hosting và streaming |	Video content
RealtimeKit	| SDK xây dựng audio/video applications |	Video calls
Realtime SFU |	Hạ tầng chuyển tiếp media realtime |	WebRTC
Email Service |	Gửi và nhận email qua ứng dụng |	Transactional email
Email Routing |	Forward email theo domain |	Forward feedback email