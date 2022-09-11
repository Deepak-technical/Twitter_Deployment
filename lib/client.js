
import sanityClient from '@sanity/client'
export const client = sanityClient({
  projectId:"5t7l6kyr",
  dataset: 'production',
  apiVersion: 'v1',
  token:'skN4iMSxyiDO4VpN2eAs1YiD9tKidwh7cbE2PUrnezZvae7wJaoV4gSg5Zgo3HyEXWzlVe4TEiwHAmhv0GXmLkhR0mtkA5DdIN186Zqavef9uqDYAsVvPdN6MGnq0UXWqUCAUgIZjeeotbf3Q84AcyeecsuXIREHYEg5cUM8QvSCyroSGXdi',
  useCdn: false,
})