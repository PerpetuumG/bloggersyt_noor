import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container className={'p-10 bg-black text-gray-100 flex items-center justify-between'}>
      <Logo title={'Bloggers'} className={'text-white'} />

      <div className={'text-gray-300 hidden md:inline-flex items-center gap-7'}>
        <Link href={'https://www.youtube.com'} target={'_blank'}>
          <BsYoutube className={'text-2xl hover:text-red-500 duration-200 cursor-pointer'} />
        </Link>

        <Link href={'https://www.github.com'} target={'_blank'}>
          <BsGithub className={'text-2xl hover:text-white-500 duration-200 cursor-pointer'} />
        </Link>

        <Link href={'https://www.facebook.com'} target={'_blank'}>
          <BsFacebook className={'text-2xl hover:text-blue-500 duration-200 cursor-pointer'} />
        </Link>

        <Link href={'https://www.instagram.com'} target={'_blank'}>
          <BsInstagram className={'text-2xl hover:text-orange-500 duration-200 cursor-pointer'} />
        </Link>
      </div>

      <p className={'text-sm text-gray-300'}>
        &copy; All right reserved{' '}
        <Link
          href={'https://www.youtube.com'}
          target={'_blank'}
          className={'hover:text-white font-semibold duration-200'}
        >
          @reactjsBD
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
