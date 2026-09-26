import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homePage"][0]{
  "hero": {
    "title": coalesce(hero.title, title),
    "subtitle": coalesce(hero.subtitle, subtitle),
    "buttonText": coalesce(hero.buttonText, "Listen Now"),
    "albumImage": coalesce(hero.albumImage, albumImage){
      asset->{
        _id,
        url,
        metadata{ lqip, dimensions{ width, height } }
      },
      alt,
      hotspot,
      crop
    }
  },
  morgan{
    title,
    text,
    buttonText,
    image{
      asset->{
        _id,
        url,
        metadata{ lqip, dimensions{ width, height } }
      },
      alt,
      hotspot,
      crop
    }
  },
  events{
    title,
    hidePastEvents,
    events[]{
      _key,
      eventDate,
      title,
      description,
      link
    }
  },
  merch{
    title,
    description,
    buttonText
  },
  gallery{
    images[]{
      _key,
      asset->{
        _id,
        url,
        metadata{ lqip, dimensions{ width, height } }
      },
      alt,
      hotspot,
      crop
    }
  }
}`)
