import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import Cafe from '../../assets/coffee/cold_espresso.png'
import { useWindowSize } from "../../hooks/useWindowSize";
import { CoffeeCard } from "./CoffeeCard";

export function OurCoffes() {
  const { width } = useWindowSize()
  return (
    <Flex
      flexDir={'column'}
    >
      <Heading
        as='h2'
        fontWeight={'800'}
        fontSize={['1.4rem', '1.5rem', '1.7rem']}
      >
        Our Coffee
      </Heading>
      <Wrap mt='49px' justify={width && width > 821 ? 'space-between' : 'space-around'}>
        <WrapItem>
          <CoffeeCard
            imageSrc={Cafe}
            tags={[
              { label: 'Traditional' },
              { label: 'Cold' }
            ]}
            title={'Cold Espresso'}
            content={'Delicious coffee espresso drink made with ice.'}
            price={'9,90'}
          />
        </WrapItem>

        <WrapItem>
          <CoffeeCard
            imageSrc={Cafe}
            tags={[
              { label: 'Traditional' },
              { label: 'Cold' }
            ]}
            title={'Cold Espresso'}
            content={'Delicious coffee espresso drink made with ice.'}
            price={'9,90'}
          />
        </WrapItem>
        <WrapItem>
          <CoffeeCard
            imageSrc={Cafe}
            tags={[
              { label: 'Traditional' },
              { label: 'Cold' }
            ]}
            title={'Cold Espresso'}
            content={'Delicious coffee espresso drink made with ice.'}
            price={'9,90'}
          />
        </WrapItem>
        <WrapItem>
          <CoffeeCard
            imageSrc={Cafe}
            tags={[
              { label: 'Traditional' },
              { label: 'Cold' }
            ]}
            title={'Cold Espresso'}
            content={'Delicious coffee espresso drink made with ice.'}
            price={'9,90'}
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
