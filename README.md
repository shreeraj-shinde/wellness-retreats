
# Wellness Retreats

A Website which shows events related health retreats


## Installation

Clone the git repository
```bash
git clone https://github.com/shreeraj-shinde/wellness-retreats.git

```
Enter the following commands in the terminal

```bash
  cd wellness-retreats
  npm install
```

This will install all the dependencies required to run the project.

Now to run the project devlopment mode use

```
npm run dev
or
npm start

```

To build the project for production use

```
npm build
```


## API Reference

url = https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats

#### Get all Retreats

```http
  GET url/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `no Parameter` | `NA` | Fetches all the retreats |

#### Get item

```http
  GET url/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  GET url?{filter}=value
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filter , value`      | `string , string` | **Required**.  Filter for Fetching the data |




## Features

- Filtering 
- Dynamin Filter Options
- Responsive





## 
