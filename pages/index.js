import {useState} from 'react'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature"
import ScillsList from "../components/ScillsList"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contacts from "../components/Contacts"

const Index = () => {

  const [ru, setRu] = useState(true)

  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header ru={ru} setRu={setRu}/>
      <Hero ru={ru} setRu={setRu}/>
      <Feature ru={ru} setRu={setRu}/>
      <ScillsList ru={ru} setRu={setRu}/>
      <Experience ru={ru} setRu={setRu}/>
      <Projects ru={ru} setRu={setRu}/>
      <Contacts ru={ru}/>
      <Footer ru={ru} setRu={setRu}/>
    </Layout>
  )
}
export default Index;