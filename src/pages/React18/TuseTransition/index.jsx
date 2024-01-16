import React, { useState, useTransition } from 'react';
import styles from './index.module.scss'

const Tab = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};



const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('Home');
  
  const [isPending, startTransition] = useTransition()

  const handleTabClick = (label) => {
    // 将某次状态更新作为回调传入startTransiton, 
    // 状态更新对应的DOM更新将被分成多个任务执行（当DOM更新超过一定时间）。
    // 即，将本次更新降低优先级，不阻塞GUI的渲染。
    startTransition(()=>{
      setActiveTab(label)
    })
  };
  

  const tabContent = isPending? <div>Loading... </div> : <>
    {/* 根据标签显示相应内容 */}
    {activeTab === 'Home' && <p>This is Home</p>}
        {activeTab === 'Movie' && 
          <ul>
            {Array(500000).fill('movie').map((item,i)=>(
              <ol key={i}>{item+ i}</ol>
            )) }
          </ul>
        }
        {activeTab === 'About' && <p>About</p>}
  </>

  return (
    <div className={styles.container}>
      <div className={styles.tabSwitcher}>
        <Tab label="Home" activeTab={activeTab} onClick={handleTabClick} />
        <Tab label="Movie" activeTab={activeTab} onClick={handleTabClick} />
        <Tab label="About" activeTab={activeTab} onClick={handleTabClick} />
        
        
      </div>
      <div className={styles.tabContainer}>
        
        <div className={styles.tabContent}>
          {tabContent}
        </div>
      </div>
    </div>
  );
};

export default TabSwitcher;
