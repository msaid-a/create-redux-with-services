import React, {useEffect} from 'react'
import {newsServices} from '../services'
import {AppReduxState} from '../redux'
import { useSelector } from 'react-redux';
import {Container, Break, Text} from '../Component'


const Main: React.FC = () => {
    const news = useSelector((state: AppReduxState) => state)

    const getData = async () => {
        await newsServices.getNews()
        await newsServices.getHeadline()
    }

    useEffect(() => {
        getData()
    }, [])
    
    console.log(news, 'asdasd')
    return (
        <Container className="p-4">
            <Text.Heading h={1}>Hello Word</Text.Heading>
            <Break />
            <Text.Heading h={1}>Hello Word</Text.Heading>
        </Container>
    )
}

export default Main
