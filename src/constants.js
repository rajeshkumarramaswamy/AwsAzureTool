

export const az_tenant_id="9900f69b-cfa2-43a7-953c-7c6076a6b856"
export const az_client_id="015b5a6d-3941-4c3b-8a54-94f799dc84f1"
export const az_application_secret="udU5FGjGaoUOhyH0rPIHRd4UMe2ZPkXzdbirnWSNWwE="
export const az_subscription_id="2a5fbe7a-1cf9-4e8c-8b18-fe161a64b0fe"
export const az_authentication_endpoint = 'https://login.microsoftonline.com/'
export const az_resource = 'https://management.core.windows.net/'

export const AWS_SUPPORTED = [
't3.nano','t3.micro','t3.small','t3.medium','t3.large','t3.xlarge','t2.nano','t2.micro','t2.small','t2.medium','t2.large','t2.xlarge','t2.2xlarge','m5.large','m5.xlarge','m5.2xlarge','m5.4xlarge',
'm5.12xlarge','m5.24xlarge','m5.metal','m5d.large','m5d.xlarge','m5d.2xlarge','m5d.4xlarge','m5d.12xlarge','m5d.24xlarge','m5d.metal','m5a.large','m5a.large','m5a.2xlarge','m5a.4xlarge','m5a.12xlarge','m5a.24xlarge','m5ad.large','m5ad.xlarge','m5ad.2xlarge','m5ad.4xlarge','m5ad.12xlarge','m5ad.24xlarge',
'm4.large','m4.xlarge','m4.2xlarge','m4.4xlarge','m4.10xlarge','m4.16xlarge','a1.medium','a1.large','a1.xlarge','a1.2xlarge','a1.4xlarge','c5.large','c5.xlarge','c5.2xlarge','c5.4xlarge','c5.9xlarge','c5.18xlarge','c5d.large','c5d.xlarge','c5d.2xlarge','c5d.4xlarge','c5d.9xlarge','c5d.18xlarge','c5n.large','c5n.xlarge','c5n.2xlarge','c5n.4xlarge','c5n.9xlarge','c5n.18xlarge','c4.large','c4.xlarge','c4.2xlarge','c4.4xlarge','c4.8xlarge',
'r5.large','r5.xlarge','r5.2xlarge','r5.4xlarge','r5.12xlarge','r5.24xlarge','r5.metal','r5d.large','r5d.xlarge','r5d.2xlarge','r5d.4xlarge','r5d.12xlarge','r5d.24xlarge','r5d.metal','r5a.large','r5a.xlarge','r5a.2xlarge','r5a.4xlarge','r5a.12xlarge','r5a.24xlarge','r5ad.large','r5ad.xlarge','r5ad.2xlarge','r5ad.4xlarge','r5ad.4xlarge','r5ad.12xlarge','r5ad.24xlarge',
'r4.large','r4.xlarge','r4.2xlarge','r4.4xlarge','r4.8xlarge','r4.16xlarge','x1.16xlarge','x1.32xlarge','z1d.large','z1d.xlarge','z1d.2xlarge','z1d.3xlarge','z1d.6xlarge','z1d.12xlarge','z1d.metal'
]
    
    
export const AZURE_SUPPORTED = [
'Standard_A2','Standard_A3','Standard_A5','Standard_A4','Standard_A6','Standard_A7','Standard_D1','Standard_D2','Standard_D3','Standard_D4','Standard_D11','Standard_D12','Standard_A1_v2',
'Standard_A2m_v2','Standard_A2_v2','Standard_A4m_v2','Standard_A4_v2','Standard_A8m_v2','Standard_A8_v2','Standard_DS11','Standard_DS12','Standard_DS13',
'Standard_D11_v2','Standard_D12_v2','Standard_D13_v2','Standard_D2_v2_Promo','Standard_D3_v2_Promo','Standard_D4_v2_Promo','Standard_D11_v2_Promo','Standard_D12_v2_Promo','Standard_D13_v2_Promo',
'Standard_F1','Standard_F2','Standard_F4','Standard_F8','Standard_B1ms','Standard_B1s','Standard_B2ms','Standard_B2s','Standard_B4ms','Standard_B8ms','Standard_DS1_v2','Standard_DS2_v2','Standard_DS3_v2','Standard_DS4_v2',
'Standard_DS11_v2','Standard_DS12_v2','Standard_DS13_v2','Standard_DS11_v2_Promo','Standard_DS12_v2_Promo','Standard_DS13_v2_Promo','Standard_D2_v3','Standard_D4_v3','Standard_D8_v3',
'Standard_E2_v3','Standard_E4_v3','Standard_E8_v3','Standard_E2s_v3','Standard_E4s_v3','Standard_E8s_v3'
]

export const SUPPORTED_OS = ['redhat', 'ubuntu', 'debian', 'windows', 'amazon linux', 'cent os']
export const DATA_UNAVAILABLE = "Data unavailable"



export const AWS_API = {
    'describeInstances': 'https://ec2.amazonaws.com/?Action=DescribeInstances&AUTHPARAMS'

}

export const AZURE_API = {
    'vm': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Compute/virtualMachines?api-version=2018-06-01`,
    'vn': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/virtualNetworks?api-version=2018-11-01`,
    'tmf': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2018-04-01`,
    'vg': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/vpnGateways?api-version=2018-11-01`,
    'lb': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/loadBalancers?api-version=2018-11-01`,
    'nsg': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/networkSecurityGroups?api-version=2018-11-01`,
    'erc': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/expressRouteCircuits?api-version=2018-08-01`,
    'af': `https://management.azure.com/subscriptions/${az_subscription_id}/providers/Microsoft.Network/azureFirewalls?api-version=2018-08-01`,
}