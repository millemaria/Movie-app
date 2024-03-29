import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'

interface movies {
    title: string,
    data: any,
    hideSeeAll: boolean
}

var { width, height } = Dimensions.get('window');

export const MovieList: React.FC<movies> = ({ title, data, hideSeeAll }: movies) => {
    let movieName = 'Spider-Man 2'
    const navigation = useNavigation();

    return (
        <View className='mb-8 spcae-y-4'>
            <View className='mx-4 flex-row justify-between items-center'>
                <Text className='text-white text-xl'>{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.text} className='text-lg'>See All</Text>
                        </TouchableOpacity>
                    )
                }

            </View>
            {/* moview row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 15 }}
            >
                {
                    data && data.map((item: any, index: any) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('Movie', item)}
                            >
                                <View className='spcae-y-1 mr-4'>
                                    <Image
                                        source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                                        // source={require('../assets/poster/poster-1.jpg')}
                                        className='rounded-3xl'
                                        style={{ width: width * 0.33, height: height * 0.22 }}
                                    />
                                    <Text className="text-neutral-300 ml-1">
                                        {
                                            item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}