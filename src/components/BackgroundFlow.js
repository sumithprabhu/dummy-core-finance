// import { useEffect } from 'react';

// const BackgroundFlow = () => {
//   const texts = [
//     "1010101101010110010101010110101010101010110110101010101101101010101010110110101010110101010110101011010101010110010101011010", // 100 characters of binary code
  
//     "Fetching blockchain data from decentralized nodes and indexing the results for efficient querying. Data consistency and integrity are maintained across the distributed ledger. The decentralized nature ensures that data is not only secure but also resilient against single points of failure. This process involves multiple nodes working in tandem to store, retrieve, and verify data, making it tamper-proof and highly reliable. The Blitiz Protocol further enhances this by offering real-time indexing and query capabilities, ensuring that the most critical data is always accessible when needed.",
  
//     "SELECT * FROM Transactions WHERE status = confirmed ORDER BY transaction_date DESC; - This SQL query retrieves the most recent confirmed transactions from the blockchain, providing a clear view of recent activities. By filtering out unconfirmed or failed transactions, this query ensures that only finalized data is presented, which is crucial for accurate financial reporting and real-time analysis. The query also orders the results by transaction date in descending order, making it easy to track the latest confirmed transactions.",
  
//     "The Blitiz Protocol is a cutting-edge solution designed to streamline data indexing and querying on decentralized networks. By leveraging advanced algorithms and optimized data structures, Blitiz Protocol ensures that data retrieval is not only fast but also consistent across all nodes in the network. This is particularly important for applications that require high availability and low latency, such as financial platforms and decentralized marketplaces. With its open-source nature, Blitiz Protocol invites developers worldwide to contribute, fostering continuous innovation in decentralized data management.",
  
//     "Open Campus Blockchain is a revolutionary Layer 3 blockchain specifically built for the education industry. It aims to transform how educational content is created, distributed, and consumed by providing a transparent and secure platform for educators, students, and institutions. The blockchain facilitates the creation of immutable academic records, ensuring that certificates and diplomas are verifiable and tamper-proof. Additionally, it supports the tokenization of educational content, allowing educators to monetize their courses directly, while students gain access to a diverse range of learning materials. Open Campus Blockchain is set to disrupt traditional education models, paving the way for a more inclusive and equitable educational landscape.",
  
//     "Data integrity and security are crucial in decentralized networks, where sensitive information must be protected against unauthorized access and tampering. In blockchain systems, data integrity is maintained through cryptographic techniques and consensus mechanisms, which ensure that all participants in the network have a consistent view of the ledger. Security measures, such as encryption and secure access controls, are implemented to protect data from breaches and other malicious activities. As cyber threats continue to evolve, maintaining data integrity and security requires a proactive approach, including regular audits and the adoption of best practices.",
//     "Analyzing historical data allows organizations to identify patterns and trends over time, providing valuable insights for decision-making and strategic planning. Historical data encompasses a wide range of information, from financial records to user interactions, and is often stored in large databases. By applying advanced analytics techniques, such as machine learning and predictive modeling, companies can forecast future behaviors and outcomes based on past data. This enables businesses to optimize operations, improve customer experiences, and gain a competitive edge in the market. Historical data is also essential in auditing and compliance, where it serves as a reliable source of truth for verifying past actions and ensuring accountability.",

//   "Data streaming involves the continuous transfer of data at high speeds from one source to another, often in real-time. This technology is crucial for applications that require immediate processing and analysis, such as financial trading platforms, IoT devices, and live video streaming services. By processing data as it arrives, data streaming systems can deliver instant insights and actions, enabling real-time decision-making. The Blitiz Protocol supports efficient data streaming in decentralized networks, ensuring that data flows smoothly between nodes without delays or bottlenecks. This capability is particularly important in scenarios where time-sensitive information needs to be distributed quickly and reliably across a distributed ledger.",

//   "Smart contracts are self-executing agreements encoded on the blockchain, with the terms of the contract directly written into code. Once deployed, these contracts automatically execute and enforce the agreed-upon terms when predefined conditions are met. This eliminates the need for intermediaries, reducing costs and increasing transaction efficiency. Smart contracts are widely used in decentralized finance (DeFi) applications, where they facilitate peer-to-peer transactions such as lending, borrowing, and trading. To ensure security and reliability, smart contracts undergo rigorous testing and auditing before being deployed on the blockchain. The Blitiz Protocol integrates seamlessly with smart contracts, enabling real-time indexing and querying of contract events across decentralized networks.",

//   "Blockchain scalability refers to the ability of a blockchain network to handle an increasing number of transactions and users without compromising performance. As blockchain adoption grows, scalability becomes a critical factor in ensuring that the network can support large-scale applications, such as decentralized finance (DeFi), supply chain management, and digital identity systems. Various solutions have been proposed to address blockchain scalability, including layer 2 protocols, sharding, and consensus algorithm optimizations. The Blitiz Protocol contributes to scalability by optimizing data indexing and retrieval processes, ensuring that even as the blockchain grows, data remains easily accessible and manageable across the network.",

//   "The role of consensus mechanisms in blockchain networks is to ensure that all participants agree on the state of the ledger. Different consensus algorithms, such as Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS), offer various trade-offs in terms of security, energy efficiency, and decentralization. The choice of consensus mechanism has a significant impact on the performance and security of the blockchain. In the context of the Blitiz Protocol, efficient data indexing and querying are maintained regardless of the underlying consensus mechanism, ensuring that data remains consistent and accessible across all nodes in the network.",

//   "Decentralized identity solutions leverage blockchain technology to provide individuals with control over their personal data and digital identities. Unlike traditional identity systems, where data is stored on centralized servers, decentralized identity allows users to own and manage their information directly. This approach enhances privacy and security, as individuals can share their credentials without relying on third parties. The Blitiz Protocol supports decentralized identity by enabling efficient indexing and querying of identity-related data, ensuring that users can securely manage and verify their digital identities across decentralized networks. This technology is particularly relevant in areas such as online authentication, digital signatures, and secure communication.",

//   "Tokenization is the process of converting physical or digital assets into tokens on a blockchain, allowing for the secure and efficient transfer of ownership. These tokens can represent anything from real estate and artwork to stocks and bonds. Tokenization enables fractional ownership, where multiple individuals can own a portion of an asset, and facilitates liquidity in traditionally illiquid markets. The Blitiz Protocol plays a key role in tokenization by providing the infrastructure for indexing and querying tokenized assets across decentralized networks. This ensures that asset information is easily accessible, transparent, and verifiable, fostering trust and enabling new forms of investment and commerce.",

//   "The Internet of Things (IoT) refers to the interconnected network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity. These devices collect and exchange data, enabling automation, monitoring, and remote control across various applications, from smart homes to industrial automation. The Blitiz Protocol enhances IoT networks by providing real-time data indexing and querying capabilities, ensuring that data generated by IoT devices is efficiently stored, processed, and accessible across decentralized networks. This integration of IoT with blockchain technology opens up new possibilities for secure, scalable, and autonomous systems that can operate without centralized control.",

//   "Data privacy is a growing concern in the digital age, as more personal and sensitive information is shared online. Blockchain technology offers a promising solution to data privacy challenges by providing a decentralized, transparent, and tamper-proof platform for data storage and sharing. The Blitiz Protocol supports data privacy by enabling encrypted data indexing and querying, ensuring that sensitive information remains secure and accessible only to authorized parties. This is particularly important in industries such as healthcare, finance, and legal services, where data privacy is paramount. By integrating advanced encryption techniques and access controls, the Blitiz Protocol helps organizations protect their data while maintaining compliance with privacy regulations.",

//   "The future of decentralized applications (dApps) lies in their ability to scale and provide seamless user experiences comparable to traditional web applications. As blockchain technology continues to evolve, dApps are expected to become more user-friendly, faster, and more secure. The Blitiz Protocol contributes to this evolution by offering a robust framework for data indexing and querying, ensuring that dApps can efficiently manage and retrieve data in real-time. This is critical for applications that require high availability, low latency, and large-scale user interaction, such as social networks, gaming platforms, and decentralized finance (DeFi) services. With the support of protocols like Blitiz, dApps are poised to revolutionize the way we interact with digital services.",
//   "Tokenization is the process of converting physical or digital assets into tokens on a blockchain, allowing for the secure and efficient transfer of ownership. These tokens can represent anything from real estate and artwork to stocks and bonds. Tokenization enables fractional ownership, where multiple individuals can own a portion of an asset, and facilitates liquidity in traditionally illiquid markets. The Blitiz Protocol plays a key role in tokenization by providing the infrastructure for indexing and querying tokenized assets across decentralized networks. This ensures that asset information is easily accessible, transparent, and verifiable, fostering trust and enabling new forms of investment and commerce.",

//   "The Internet of Things (IoT) refers to the interconnected network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity. These devices collect and exchange data, enabling automation, monitoring, and remote control across various applications, from smart homes to industrial automation. The Blitiz Protocol enhances IoT networks by providing real-time data indexing and querying capabilities, ensuring that data generated by IoT devices is efficiently stored, processed, and accessible across decentralized networks. This integration of IoT with blockchain technology opens up new possibilities for secure, scalable, and autonomous systems that can operate without centralized control.",

//   "Data privacy is a growing concern in the digital age, as more personal and sensitive information is shared online. Blockchain technology offers a promising solution to data privacy challenges by providing a decentralized, transparent, and tamper-proof platform for data storage and sharing. The Blitiz Protocol supports data privacy by enabling encrypted data indexing and querying, ensuring that sensitive information remains secure and accessible only to authorized parties. This is particularly important in industries such as healthcare, finance, and legal services, where data privacy is paramount. By integrating advanced encryption techniques and access controls, the Blitiz Protocol helps organizations protect their data while maintaining compliance with privacy regulations.",

//   "The future of decentralized applications (dApps) lies in their ability to scale and provide seamless user experiences comparable to traditional web applications. As blockchain technology continues to evolve, dApps are expected to become more user-friendly, faster, and more secure. The Blitiz Protocol contributes to this evolution by offering a robust framework for data indexing and querying, ensuring that dApps can efficiently manage and retrieve data in real-time. This is critical for applications that require high availability, low latency, and large-scale user interaction, such as social networks, gaming platforms, and decentralized finance (DeFi) services. With the support of protocols like Blitiz, dApps are poised to revolutionize the way we interact with digital services."
//   ];
  

//   useEffect(() => {
//     const container = document.getElementById('background-flow');

//     texts.forEach((text, i) => {
//       // Create a new div for each line
//       const line = document.createElement('div');
//       line.className = `flow-line line-${i}`;
      
//       // Set the fixed vertical position
//       //line.style.top = `${i * 20}%`;

//       // Set random speed and direction
//       const randomSpeed = (i%10)*5 + 60; // Speed between 20s and 30s
//       const direction = (i%7) > 3 ? 'moveLine' : 'moveLineReverse'; // Direction
//       line.style.animationDuration = `${randomSpeed}s`;
//       line.style.animationName = direction;

//       // Assign the text
//       line.innerText = text;
//       container.appendChild(line);
//     });
//   }, []);

//   return <div id="background-flow" className="absolute inset-0 overflow-hidden z-0"></div>;
// };

// export default BackgroundFlow;
