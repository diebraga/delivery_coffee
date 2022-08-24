import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import CoffeeCard from "./CoffeeCard";
import products from "../../data/products.json";

export function OurCoffes() {
  return (
    <Flex
      flexDir={'column'}
      pb='50px'
    >
      <Heading
        as='h2'
        fontWeight={'800'}
        fontSize={['1.4rem', '1.5rem', '1.7rem']}
      >
        Our Coffee
      </Heading>
      <Wrap mt='49px' justify={['space-around', 'space-around', 'space-around', 'space-between']}>
        {products.map(product => {
          return (
            <WrapItem key={product.id}>
              <CoffeeCard
                imageSrc={product.picture}
                tags={product.tags}
                title={product.title}
                content={product.content}
                price={(product.price)}
                productRef={product.ref}
              />
            </WrapItem>
          )
        })}
      </Wrap>
    </Flex>
  )
}
