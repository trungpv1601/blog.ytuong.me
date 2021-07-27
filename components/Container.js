import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BLOG from "@/blog.config";
import Head from "next/head";
import PropTypes from "prop-types";
// import BlogPost from './BlogPost'

const Container = ({ children, layout, fullWidth, ...customMeta }) => {
  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link;
  const meta = {
    title: BLOG.title,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={BLOG.darkBackground} name="theme-color" />
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(", ")} />
        )}
        <meta name="description" content={meta.description} />
        <meta property="og:locale" content={BLOG.lang} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={meta.slug ? `${url}/${meta.slug}` : url}
        />
        <meta
          property="og:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        <meta property="og:type" content={meta.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta
          name="twitter:image"
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
        {meta.type === "article" && (
          <>
            <meta
              property="article:published_time"
              content={meta.date || meta.createdTime}
            />
            <meta property="article:author" content={BLOG.author} />
          </>
        )}
      </Head>
      <div
        className={`wrapper ${
          BLOG.font === "serif" ? "font-serif" : "font-sans"
        }`}
      >
        <div className="flex h-screen overflow-hidden bg-white">
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-72">
              <div className="flex flex-col flex-1 h-0 px-4 bg-gray-100">
                <div className="py-8 space-y-6 text-right">
                  <img
                    className="object-cover w-40 h-40 mx-auto rounded-full"
                    src="https://res.cloudinary.com/vk1ng/image/upload/v1627399058/Screenshot_4_kjlalm.png"
                    alt=""
                  />
                  <div className="space-y-4">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>JOHN NGUYEN</h3>
                      <p className="text-teal-600">FREELANCER - FULLTIME</p>
                    </div>
                    <p className="font-mono text-sm text-gray-600 ">
                      Tôi xuất thân là nhân viên văn phòng, tôi yêu thích sự tự
                      do, con người, tôi thích đọc sách về kinh doanh và những
                      mẩu chuyện ở trong đó. Hiện tại tôi muốn lan tỏa năng
                      lượng này tới nhiều người.
                    </p>
                  </div>
                </div>

                <div class="space-y-1 border-t-8 border-gray-500 py-4">
                  <a
                    href="https://www.facebook.com/anhnguyenjohn1"
                    class="group flex items-center justify-end px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span class="truncate">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-0 overflow-auto">
            <Header
              navBarTitle={layout === "blog" ? meta.title : null}
              fullWidth={fullWidth}
            />
            <main
              className={`m-auto flex-grow w-full transition-all ${
                !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
              }`}
            >
              {children}
            </main>
            <Footer fullWidth={fullWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
