import React from 'react'
import Post from '../Post'
import { useContext, useState, useEffect } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Facundo',
    userName: '0xFa7AF1C342dC96A436B45e73A13BfdA35e2bDD06',
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s900-c-k-c0x00ffffff-no-rj',
    text: 'SO RYE GE TON',
    isProfileImageNft: false,
    timestamp: '2022-03-23T12:00:00.000Z',
  },
  {
    displayName: 'Facundo',
    userName: '0xFa7AF1C342dC96A436B45e73A13BfdA35e2bDD06',
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s900-c-k-c0x00ffffff-no-rj',
    text: 'SO RYE GE TON',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z',
  },
  {
    displayName: 'Facundo',
    userName: 'Fac0xFa7AF1C342dC96A436B45e73A13BfdA35e2bDD06undo',
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s900-c-k-c0x00ffffff-no-rj',
    text: 'SO RYE GE TON',
    isProfileImageNft: false,
    timestamp: '2021-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Facundo',
    userName: 'Fac0xFa7AF1C342dC96A436B45e73A13BfdA35e2bDD06undo',
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s900-c-k-c0x00ffffff-no-rj',
    text: 'SO RYE GE TON',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
]

const ProfileTweets = () => {
  const { currentUser, currentAccount } = useContext(TwitterContext)
  const [author, setAuthor] = useState({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNft: undefined,
  })
  const [tweets, setTweets] = useState([
    {
      timestamp: '',
      tweet: '',
    },
  ])

  useEffect(() => {
    if (!currentUser) return

    setTweets(currentUser.tweets)
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    })
  }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            author.name === 'Unnamed'
              ? `${author.walletAddress.slice(
                  0,
                  4
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={currentUser.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
