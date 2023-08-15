
# Your Play

Apps like tokopedia play

## 🔗 Links
[![portfolio](https://img.shields.io/badge/see_Website-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://afrinaldi-gigih.vercel.app/)

## Features

- YouTube Embed
- Add comment
- List related product

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


## Schema Database

#### Video

- _id: Unique identifier for the video.
    - Type: String
    - Required: true
- url_img: URL to the video's image.
    - Type: String
    - Required: true
- product_list: Array of products associated with the video.
    - Type: Array of Product documents (defined by ProductSchema)
- comment_list: Array of comments associated with the video.
    - Type: Array of Comment documents (defined by CommentSchema)

#### ProductSchema

- productID: Unique identifier for the product.
    - Type: mongoose.Types.ObjectId
    - Required: true
- linkProduct: URL to the product's page.
    - Type: String
    - Required: true
- title: Title of the product.
    - Type: String
    - Required: true
- price: Price of the product.
    - Type: Number
    - Required: true

#### CommentSchema

- username: Username of the commenter.
    - Type: String
    - Required: true
- comment: The actual comment content.
    - Type: String
    - Required: true
- timestamps: Automatically generated timestamps for comment creation and modification.
