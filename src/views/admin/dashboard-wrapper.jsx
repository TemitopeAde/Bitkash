import React from "react";
import Section from "../../components/section";
import Tab from "../../components/tab";
import Text from "../../components/text";
import RecentTransactions from "../../constants/recent-transactions";
import AdminLayout from "../../layout/admin-layout";
import AdminDashboardChart from "../components/admin-dashboard-chart";

export default function AdminDashboardWrapper() {
  return (
    <AdminLayout>
      <div>
        <Section background='tw-bg-pink-light' classname='tw-flex gap-4 tw-items-center'>
          <div className='tw-flex-1'>
            <div>
              <Text as='h2'>Dashboard</Text>
            </div>
            <div className='tw-py-6 tw-grid tw-grid-cols-2 tw-gap-6 tw-justify-between tw-w-fit'>
              <div>
                <Text as='h4' classname='tw-text-primary-main'>
                  1000
                </Text>
                <Text as='p'>No of users</Text>
              </div>
              <div>
                <Text as='h4' classname='tw-text-primary-main'>
                  6000
                </Text>
                <Text as='p'>No of trasactions</Text>
              </div>
              <div>
                <Text as='h4' classname='tw-text-primary-main'>
                  $50K
                </Text>
                <Text as='p'>Average sales</Text>
              </div>
              <div>
                <Text as='h4' classname='tw-text-primary-main'>
                  $600K
                </Text>
                <Text as='p'>No of BTC Purchased</Text>
              </div>
            </div>
          </div>
          <div className='tw-flex-1'>
            <AdminDashboardChart />
          </div>
        </Section>

        <Section classname='tw-flex tw-gap-6 tw-justify-between'>
          <div className='tw-flex-1 tw-p-4 tw-bg-primary-main tw-rounded-lg'>
            <div className='tw-flex tw-justify-between tw-items-center tw-py-4'>
              <Text as='p' classname='tw-py-0 tw-text-white'>
                Recent Transactions
              </Text>
              <Text
                as='p'
                classname='tw-py-0 tw-text-secondary-main tw-text-base tw-font-medium'
              >
                Filter by
              </Text>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-2'>
              {RecentTransactions.map((transaction) => (
                <Tab
                  key={transaction.id}
                  name={transaction.name}
                  amount={transaction.amount}
                  date={transaction.date}
                />
              ))}
            </div>
          </div>
          <div className='tw-flex-1 tw-p-4 tw-bg-pink-light tw-border-[1px] tw-border-primary-main tw-rounded-lg'>
            <div className='tw-flex tw-justify-between tw-items-center tw-py-4'>
              <Text as='p' classname='tw-py-0 tw-text-primary-main' weight="semi-bold">
                Recent Signups
              </Text>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-2'>
              {RecentTransactions.map((transaction) => (
                <Tab
                  key={transaction.id}
                  name={transaction.name}
                  amount={transaction.amount}
                  date={transaction.date}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </AdminLayout>
  );
}
