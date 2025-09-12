import React from 'react'
import Link from 'next/link'
function Home() {

  const movies =  [
        {
          "id": "43d7115a-baca-4b49-86c1-b6fbb8098e8e",
          "movie_id": 2071,
          "name": "Theodore Bikel",
          "original_name": "Theodore Bikel",
          "popularity": "4.816",
          "profile_path": "https://image.tmdb.org/t/p/original/mYiM4fRl9xpGRBf6gSAPekvcaj8.jpg",
          "character": "Dr. Berkus",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "78d35dbc-5b5f-4835-8af3-0e7a51525137",
          "movie_id": 2071,
          "name": "Tom Berenger",
          "original_name": "Tom Berenger",
          "popularity": "24.899",
          "profile_path": "https://image.tmdb.org/t/p/original/zLxzAdAfu7y02yEx29JSLDgXJZ4.jpg",
          "character": "Dan Merrick",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "643c1c70-26ed-4b90-b68d-a39ca570ec49",
          "movie_id": 2071,
          "name": "Jedda Jones",
          "original_name": "Jedda Jones",
          "popularity": "2.652",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Sadie",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "e6dcb959-8e5a-42dd-ad28-734edc02731c",
          "movie_id": 2071,
          "name": "Dona Hardy",
          "original_name": "Dona Hardy",
          "popularity": "2.033",
          "profile_path": "https://image.tmdb.org/t/p/original/cJNUNoJXnGpUMFjZJd6y5fOxmAj.jpg",
          "character": "Pet Shop Woman",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "1d16e476-55f4-4031-ae39-ad7630f2c736",
          "movie_id": 2071,
          "name": "Joanne Whalley",
          "original_name": "Joanne Whalley",
          "popularity": "16.311",
          "profile_path": "https://image.tmdb.org/t/p/original/dhzNVhMFvwxYgkyaxKI92g46e4l.jpg",
          "character": "Jenny Scott",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "bc9acfd9-b26d-4126-b8cc-570f248841da",
          "movie_id": 2071,
          "name": "Greta Scacchi",
          "original_name": "Greta Scacchi",
          "popularity": "16.246",
          "profile_path": "https://image.tmdb.org/t/p/original/mknKHCryWEypmT3kqFwq9X46HKr.jpg",
          "character": "Judith Merrick",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "16e27bb7-5561-4936-9cfd-9bcd6f650b79",
          "movie_id": 2071,
          "name": "Bob Hoskins",
          "original_name": "Bob Hoskins",
          "popularity": "13.789",
          "profile_path": "https://image.tmdb.org/t/p/original/qOeE7bVHAsNTbP77Qk6TwrrWHZc.jpg",
          "character": "Gus Klein",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "4c97389f-e702-4452-98b0-4a2aa2aa80ad",
          "movie_id": 2071,
          "name": "Corbin Bernsen",
          "original_name": "Corbin Bernsen",
          "popularity": "10.777",
          "profile_path": "https://image.tmdb.org/t/p/original/mLftTYHrvct0VBB8pGhJjLHZUXQ.jpg",
          "character": "Jeb Scott",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "31097c95-304f-451d-95d3-cfa384212a7c",
          "movie_id": 2071,
          "name": "Kellye Nakahara",
          "original_name": "Kellye Nakahara",
          "popularity": "1.912",
          "profile_path": "https://image.tmdb.org/t/p/original/bq0RV6fHkxkfLdK6CA5Lt1Ri4fC.jpg",
          "character": "Lydia",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "54487abf-d7ba-46f9-9470-1386c695ad26",
          "movie_id": 2071,
          "name": "Debi A. Monahan",
          "original_name": "Debi A. Monahan",
          "popularity": "1.912",
          "profile_path": "https://image.tmdb.org/t/p/original/f2UcOJzdM5BTgIe2pVGu4j7cJ4G.jpg",
          "character": "Nancy Mercer",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "f85102bb-f878-4d31-8f3d-de378ebff4fe",
          "movie_id": 2071,
          "name": "Bert Rosario",
          "original_name": "Bert Rosario",
          "popularity": "1.587",
          "profile_path": "https://image.tmdb.org/t/p/original/5Wt6TNB3ncreaJ7dL4wQkl3ALyG.jpg",
          "character": "Rudy Costa",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "91f66ade-1fc8-479d-9913-b44b941391ce",
          "movie_id": 2071,
          "name": "Scott Getlin",
          "original_name": "Scott Getlin",
          "popularity": "1.222",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Jack Stanton",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "541791e3-de32-469e-b7ff-6756d2d6a960",
          "movie_id": 2071,
          "name": "Frank Cavestani",
          "original_name": "Frank Cavestani",
          "popularity": "0.605",
          "profile_path": "https://image.tmdb.org/t/p/original/4IaXU3ZKDKOuXqDTTYSAhsbefrv.jpg",
          "character": "Cop",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "08047c60-7b6a-49ed-998a-a0e2bd11d00b",
          "movie_id": 2071,
          "name": "George Herbert Semel",
          "original_name": "George Herbert Semel",
          "popularity": "0.6",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Plastic Surgeon",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "1ed1a7d5-cfca-407e-a192-1fbcb3a2d56f",
          "movie_id": 2071,
          "name": "Jasmin Gabler",
          "original_name": "Jasmin Gabler",
          "popularity": "0.6",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Jebs Secretary",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "6124e2c4-4d18-4d01-ab86-5c7d11b5fe11",
          "movie_id": 2071,
          "name": "Charlene Hall",
          "original_name": "Charlene Hall",
          "popularity": "0.6",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Receptionist",
          "created_at": null,
          "updated_at": null
        },
        {
          "id": "935b3928-dea8-4be1-ac6e-c403a831f36b",
          "movie_id": 2071,
          "name": "Dierk Torsek",
          "original_name": "Dierk Torsek",
          "popularity": "0.6",
          "profile_path": "https://image.tmdb.org/t/p/original",
          "character": "Dr. Benton",
          "created_at": null,
          "updated_at": null
        }
      ]


  return (
    <div className='flex flex-wrap md:px-10 py-20 md:py-28 gap-10 justify-center '>
      {movies.map((movie) => (
          <div key={movie.id} className='w-full md:w-[300px] px-8'>
        <Link href={`/movies/${movie.id}`}>
          <img src={movie.profile_path} alt={movie.name} className='w-full h-[400px] rounded-xl object-cover shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'/>
          <h2 className='text-lg font-semibold mt-2'>{movie.name}</h2>
        </Link>
        </div>
      ))}
    </div>
  )
}

export default Home