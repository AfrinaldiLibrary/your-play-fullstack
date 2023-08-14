
# Your Play

Apps like tokopedia play

## API Reference

#### Get all videos

```http
  GET /api/videos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` |  |

#### Get all product

```http
  GET /api/videos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Get all comment

```http
  GET /api/videos/comment/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post comment

```http
  POST /api/videos/comment/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`, `username`, `comment`      | `string`, `string`, `string` | **Required**. Id of item to fetch & Username, Comment of item to store |



## Installation

Install server with npm

```bash
1. cd your-play-fullstack
2. cd server
3. npm install
4. code .
```
Setup

```bash
1. create .env file in root folder
2. set PORT = 3000 & MONGO_URL =  "mongodb://0.0.0.0:27017/your_play"
3. uncomment the index.js in the root folder with the keyword comment "tambah data dummy"
```
Run project

```bash
1. nodemon index.js
```
